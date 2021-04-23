import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'
import Link from '@docusaurus/Link'

export default function CBtn({ text, href, inverse, className }) {

    const content = (
        <div className={clsx(styles.btn, inverse && styles.inverse, className && className)}>
           {text}
        </div>
    )

    if (href.includes('mailto')) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer">
                {content}
            </a>
        )
    } else {
        return (
            <Link
                to={href}>
                    {content}
                </Link>
        )
    }
}