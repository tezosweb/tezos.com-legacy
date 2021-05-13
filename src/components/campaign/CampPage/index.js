import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Carousel from 'components/campaign/Carousel'
import Explainer from 'components/campaign/Explainer'
import CTASection from 'components/campaign/CTASection'
import helloContent from 'data/campaign/hello-world/page.json'
import discoverContent from 'data/campaign/discover/page.json'
import { campNameParse } from 'utils/helpers'
import styles from './styles.module.css'

/* function debounce (func, wait, immediate) {
    let timeout;
    return function() {
        let context = this, args = arguments;
        let later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args)
        }
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    }
} */

function noWrapify(hero) {
    const split = hero.split('. ');
    const sentenceOne = split[0].split(' ');

    return (
        <>
            {`${sentenceOne.slice(0, sentenceOne.length - 1).join(' ') }`} <span style={{whiteSpace: 'nowrap'}}>{`${sentenceOne[sentenceOne.length - 1]}.`}</span> {split[1]}
        </>
    )
}

export default function Campaign({ campaign }) {
    const [ hash, setHash ] = useState('')

    const discover = campaign === 'discover';

    const page = discover ? discoverContent : helloContent;

    // Possible future addition
    /* function updatePageHash(hash) {
        debounce(() => history.replaceState(null, '', `#${hash}`), 250);
        setHash(hash)
    } */

    useEffect(() => {
        let id = window.location.href.split('#')[1];
        const story = id ? id.split('?')[0] : '';
        setHash(story)
    })



    return (
        <Layout
            title={page.metaTitle}
            description={page.metaDescription}
            image="/img/discover-tezos.jpg"
            signUpCampaign={campNameParse(campaign)}
            /* legal={page.legalCopy} */>

        <main>

            <section>
                <div className={clsx('container', discover && styles.campaignHero, !discover && styles.helloHero)}>
                    <div className={styles.backgroundGrid}>
                        <div className={clsx(styles.bgArea, styles.bgArea1, styles.lineDrop)}></div>
                        <div className={clsx(styles.bgArea, styles.bgArea2, styles.lineDropFast)}></div>
                        <div className={clsx(styles.bgArea, styles.lineDropSlow)}></div>
                        <div></div>
                    </div>
                    <h1 className={clsx(styles.heroText, styles.heroTextFade)}>
                        <span className={styles.heroUnderline}>{
                        discover 
                        ? page.heroHeading
                        : noWrapify(page.heroHeading)}</span>{discover && '.'}</h1>
                </div>
                <div className={clsx(styles.smallGrid)}>
                    <div className={styles.desktopGrid} ></div>
                    <div className={styles.desktopGrid} ></div>
                    <div className={styles.blank}> </div>
                    <div className={styles.bulb}></div>
                </div>
                <div className={styles.coverGridFiller}>
                    <div className={styles.coverGrid}></div>
                </div>
                <div className={clsx(styles.subHead, styles.subHeadExpand)}>
                    <div className={styles.filler}>
                        <div ></div>
                        <div></div>
                    </div>
                    <div className={clsx(styles.expectSection)}>
                        <p className={clsx(discover && styles.expect, !discover && styles.helloExpect, styles.expectFade)}>{page.subTitle}</p>
                    </div>
                </div>
            </section>

            <section>
                <Carousel discover={discover} hash={hash} />
            </section>

            <section>
                <Explainer 
                    heading={page.explainer.heading}
                    body={page.explainer.body}/>
            </section>

            <section>
                <CTASection 
                    sectionOne={page.cta.sectionOne}
                    sectionTwo={page.cta.sectionTwo}/>
            </section>

        </main>

        </Layout>
    )
}