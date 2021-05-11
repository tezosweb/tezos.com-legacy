import React, {useState, useEffect} from 'react'
import Flickity from 'react-flickity-component'
import NavCard from '../NavCard'
import StoryCard from '../StoryCard'
import discoverStories from 'data/campaign/discover/stories.json'
import helloStories from 'data/campaign/hello-world/stories.json'
import styles from './styles.css'
import clsx from 'clsx'
const asNavFor = typeof window !== 'undefined' ? require('flickity-as-nav-for') : () => null;

let flkty;

let oldHash;


export default function Carousel({ discover, hash }) {
    const [ currIndex, setCurrIndex ] = useState(0);
    const [ scroll, setScroll ] = useState(false);

    const stories = discover ? discoverStories : helloStories;

    const storyToIndex = stories.reduce((acc, curr, i) => {
        acc[curr.id] = i;
        return acc;
    }, {});
    
    const indexToStory = stories.reduce((acc, curr, i) => {
        acc[i] = curr.id;
        return acc;
    }, {});

    function updateSlide(dir) {
        let idx = currIndex + (dir === '-' ? -1 : 1)
        if (idx > stories.length - 1) idx -= stories.length;
        if (idx < 0) idx += stories.length;
        setCurrIndex(idx)
        flkty.select(idx)
    }

    function handleScroll(window) {
        if (window.scrollY > (0.09 * window.innerHeight)) {
            !scroll && setScroll(true)
        }
    }

    useEffect(() => {
        flkty && flkty.on('change', (idx) => {
            setCurrIndex(idx ? idx : 0)
        })
        if (oldHash === undefined || oldHash !== hash) {
            setCurrIndex(storyToIndex[hash] ? storyToIndex[hash] : 0)
            flkty.select(storyToIndex[hash] ? storyToIndex[hash] : 0)
            oldHash = hash
        }
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () => handleScroll(window))
            if (flkty && (window.innerHeight > 1200 || window.innerHeight / window.innerWidth > 1.2)) {
                setTimeout(() => setScroll(true), 400)
            }
        }

        return window.removeEventListener('scroll', () => handleScroll(window))
    })

    return (
        <>
        <Flickity flickityRef={c => (flkty = c)}
            className={clsx('nav-carousel', scroll && 'flickity-enabled is-draggable scrollAnimation')}
            options={{
                pageDots: false,
                initialIndex: currIndex,
                prevNextButtons: false,
                asNavFor: `.campaign-carousel`,
                contain: true,
                wrapAround: false,
            }}> 
            {stories.map((story, i) => (
                <NavCard selected={currIndex === i} img={`/img/campaign/${story.id}-thumb.jpg`}key={i}/>
            ))}
        </Flickity>
       
        <Flickity flickityRef={c => (flkty = c)}
            className={clsx('campaign-carousel', scroll && 'flickity-enabled is-draggable fadeAnimation')}
            options={{
                initialIndex: currIndex,
                prevNextButtons: false,
                pageDots: false,
                wrapAround: true,
                adaptiveHeight: true,
            }}> 
            {stories.map((story, i) => (
                <StoryCard story={story} key={i} forward={() => updateSlide('+')} back={() => updateSlide('-')}/>
            ))}
        </Flickity>
</>
    )
}