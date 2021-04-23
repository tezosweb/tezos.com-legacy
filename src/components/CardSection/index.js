import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

export default function CardSection({ children }) {
    return (
        <div className={clsx(styles.cardSection,
                        children.length === 2 && styles.twoColumn,
                        children.length === 3 && styles.threeColumn,
                        children.length === 4 && styles.fourColumn)}>
            {children}
        </div>
    )
}