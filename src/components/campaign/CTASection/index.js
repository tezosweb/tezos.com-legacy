import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import CBtn from '../CBtn'
import styles from './styles.module.css'

export default function CTASection({ sectionOne, sectionTwo }) {
    return (
        <div className={clsx(styles.ctaSectionWrapper, styles.ctaFade)}>
            <div className={clsx(styles.leftSection)}>
                <div className={styles.cta}>
                    <div className={styles.ctaContainer}>
                        <div className={styles.text}>
                            <h3>{sectionOne.heading}</h3>
                        </div>
                        <div className={styles.ctaSection}>
                            <CBtn
                                className={styles.ctaButton}
                                text={sectionOne.buttonText}
                                href={sectionOne.href} />
                            <div className={styles.arrowWrap}>
                                <Link to={sectionOne.href}>
                                    <div className={clsx(styles.arrow, styles.whiteArrow)}></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.rightSection}>
            <div className={styles.cta}>
                <div className={styles.ctaContainer}>
                    <div className={styles.text}>
                        <h3>{sectionTwo.heading}</h3>
                    </div>
                    <div className={styles.ctaSection}>
                        <CBtn
                            className={styles.ctaButton}
                            text={sectionTwo.buttonText}
                            href={sectionTwo.href} 
                            inverse/>
                        <div className={styles.arrowWrap}>
                            <a target="_blank" rel="noopener noreferrer" href={sectionTwo.href}>
                            <div className={clsx(styles.arrow, styles.blueArrow)}></div>
                        </a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}