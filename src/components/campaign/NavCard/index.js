import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

export default function NavCard({ img, selected }) {
    return (
        <div className={styles.navCardWrapper}>
            <div style={{backgroundImage: `url(${img})`}} className={styles.navCard}></div>
            <div className={clsx(styles.selector, selected && styles.selected)}></div>
        </div>
    )
}