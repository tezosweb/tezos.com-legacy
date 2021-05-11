import React from 'react'
import Link from '@docusaurus/Link'
import clsx from 'clsx'
import ExternalLink from 'components/ExternalLink'
import styles from './styles.module.css'

export default function StoryCard({ story, forward, back }) {
    const positionRight = story.id === 'crypto-gold' || story.id === 'crypto-superhero';
    const positionCR = story.id === 'crypto-energy';
    return (
        <div className={styles.storyContainer} >
            <div 
                style={{backgroundImage: `url(/img/campaign/${story.id}.jpg)`}} 
                className={clsx(
                    styles.storyImage,
                    positionRight && styles.storyImageRight,
                    positionCR && styles.storyImageCR)}>
             </div>
             <div className={styles.navSection}>
             <div className={styles.navigate}>
                 <div className={clsx(styles.arrow, styles.back)}  onClick={back}>
                    <img draggable="false" className={clsx(styles.arrowImage, styles.greyedArrow)} src={`/img/campaign/gradient-arrow.svg`} alt="back"/>
                 </div>
                 <div className={clsx(styles.arrow, styles.forward)} onClick={forward}>
                    <img draggable="false" className={clsx(styles.arrowImage)} src={`/img/campaign/gradient-arrow.svg`} alt="forward" />
                 </div>
             </div>
             <div className={styles.bulbDecoration}>
                 <div></div>
                 <div className={styles.blank}></div>
             </div>
             <div className={clsx(styles.bulbDecoration, styles.bulbSection)}>
                 <div></div>
                 <div className={styles.bulb}></div>
             </div>
             </div>
            <div className={styles.story}>
                <div className={styles.storyContent}>
                    <div className={styles.headingSection}>
                        <h2 className={styles.heading}>{story.heading.join(' ')}</h2>
                        <div className={styles.tags}>
                            {story.tags.map((tag, i) => <div className={styles.tag} key={i}>{tag}</div>)}
                            </div>
                    </div>
                    <div className={styles.body}>
                        {story.body.map((para, i) => <p className={styles.storyBody} key={i}>{para}</p>)}
                    </div>
                    <div className={styles.links}>
                        {story.links.map((link, i) => {
                            let textArr = link.text.split(' ');
                            const linkText = textArr.slice(0, textArr.length - 1).join(' ');
                            const linkEnd = `${textArr[textArr.length - 1]} >`;
                            return (
                                <ExternalLink className={styles.link} 
                                    link={link.href} 
                                    key={i}>
                                        {linkText}{' '}
                                        <span style={{whiteSpace: 'nowrap'}}>{linkEnd}</span>
                                    </ExternalLink>
                        )})}
                    </div>
                    <div className={styles.emailCTA}>
                        <Link className={styles.ctaLink} target="_blank" to='/discover/sign-up'>
                            <div className={styles.signUpBtn}> 
                                <h4>Stay up to date</h4>
                            </div>
                        </Link>
                    </div>

                </div>
                <div className={styles.desktopArrowSection} onClick={forward}>
                    <div className={clsx(styles.desktopArrow)}>
                    </div>

                </div>
            </div>
        </div>
    )
}