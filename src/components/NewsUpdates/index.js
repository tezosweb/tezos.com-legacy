import React from 'react'
import ExternalLink from 'components/ExternalLink'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css'

const NewsUpdates = ({ category, img, translatedTitle }) => {

    const {siteConfig} = useDocusaurusContext();

    let updates;
    if (['/', '/fr/'].includes(siteConfig.baseUrl)) updates = require(`../../data/updates/updates-${siteConfig.baseUrl === '/' ? 'en' : siteConfig.baseUrl.split('/')[1]}.json`)
    else updates = require('../../data/updates/updates-en.json');

    return (
        <div className={styles.updateContainer}>
            <img src={img} className={styles.image} />
            <div className={styles.updateContent}>
                <h2>{translatedTitle}:</h2>
                {updates[category].map(({ link, publishedDate, description }, i) => ( 
                    <div key={`${category.slice(0, 1)}${i}`}>
                        <ExternalLink link={link}> 
                            <p><b>{publishedDate}: </b>{description}</p>
                        </ExternalLink>
                    </div>
                    ))}
            </div>
        </div>
    )
};

export default NewsUpdates