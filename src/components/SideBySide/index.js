import React from 'react'
import Button from 'components/Button'
import clsx from 'clsx'
import styles from './styles.module.css'

const SideBySide = ({ cardOne, cardTwo }) => (
    <div className={styles.sideBySide}>
        <div style={{ backgroundColor: cardOne.bg }} className={clsx(styles.sideBySideCards, styles.cardOneSection)} id={cardOne.id}>
            <div className={styles.card}>
                <h2>{cardOne.heading}</h2>
                <Button text={cardOne.buttonText} href={cardOne.href}/>
            </div>
        </div>
        <div style={{backgroundColor: cardTwo.bg }} className={clsx(styles.sideBySideCards, styles.cardTwoSection)} id={cardTwo.id}>
            <div className={styles.card}>
                <h2 style={{ color: 'white' }}>{cardTwo.heading}</h2>
                <Button text={cardTwo.buttonText} href={cardTwo.href} whiteAndBlue/>
            </div>
        </div>
    </div>

)

export default SideBySide