import React from 'react'
import Link from '@docusaurus/Link'
import styles from './styles.module.css'

export default function Card({ icon, heading, link, iconResize }) {
    const content = (
        <>
            <div className={styles.cardWrapper}>
            <div className={styles.cardContainer}>
                <div className={styles.iconContainer}>
                    <div 
                        style={{
                            backgroundImage: `url(${icon})`,
                            height: iconResize ? '80px' : '55px',
                            width: iconResize ? '80px' : '55px',
                            marginBottom: (iconResize && heading !== "Open a Wallet") 
                                            ? '-20px' 
                                            : heading === "Open a Wallet" && '-25px',
                            position: iconResize && 'relative',
                            bottom: iconResize && '10px'}} 
                            className={styles.cardIcon}></div>
                </div>
                <h3 className={styles.cardHeading}>{heading}</h3>
            </div>
            </div>
            </>
    )

    if (link.slice(0, 4) === 'http') {
        return (
            <a className={styles.cardAnchor} href={link} target={link.slice(0, 4) === 'http' && '_blank'}>
                {content}
            </a>
        )
    } else {
        return (
            <Link className={styles.cardAnchor} to={link}>
                {content}
            </Link>
        )
    }
}