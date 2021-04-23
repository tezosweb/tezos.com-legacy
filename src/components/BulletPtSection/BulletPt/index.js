import React from 'react'
import styles from './styles.module.css'
import clsx from 'clsx'

const BulletPt = ({ heading, text, img, alt }) => (
    <div className={styles.bulletPtGrouping}>
        <div style={{ backgroundImage: `url(${img})` }} className={clsx(styles.icon)}></div>
        <div className={styles.bulletGroup}>
            <h3>{heading}</h3>
            <p>{text}</p>
        </div>
    </div>
)

export default BulletPt