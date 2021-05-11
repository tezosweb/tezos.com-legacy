import React from 'react'
import clsx from 'clsx'
import Button from 'components/Button'
import styles from './styles.module.css'

const Hero = ({ heading, subheading, img, buttonOne, buttonTwo }) => (
    <div className={clsx('container', styles.heroWrapper)}>
        <div className={styles.heroTextContainer}>
            <h1 className={'heroTitle'}>{heading}</h1>
            <p>{subheading}</p>
            <div className={styles.buttons}>
                <Button
                    text={buttonOne.text}
                    href={buttonOne.href}
                />
                <Button 
                    text={buttonTwo.text}
                    href={buttonTwo.href}
                    inverse
                />
            </div>
        </div>
        <div className={styles.heroImageContainer}>
            <img draggable="false" className={styles.heroImage} src={img} />
        </div>
    </div>
)

export default Hero