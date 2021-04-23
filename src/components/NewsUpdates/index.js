import React from 'react'
import updates from 'src/data/updates/updates.json'
import ExternalLink from 'components/ExternalLink'
import styles from './styles.module.css'

const NewsUpdates = ({ category, img, translatedTitle }) => (
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

export default NewsUpdates