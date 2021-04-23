import React, {useState} from 'react'
import clsx from 'clsx'
import useThemeContext from '@theme/hooks/useThemeContext';
import styles from './styles.module.css'

export default function Explainer({ heading, body }) {
    const [ revealed, setRevealed ] = useState(false)
    const [ justLoaded, setJustLoaded ] = useState(true)

    function handleToggle() {
        if (justLoaded) setJustLoaded(false)
        setRevealed(!revealed)
    }

    const {isDarkTheme} = useThemeContext();

    return (
        
        <div className={clsx(
                                styles.explainerWrap, 
                                styles.explainerFade, 
                                !revealed && justLoaded && styles.explainerTop,
                                revealed && styles.expand,
                                !revealed && !justLoaded && styles.retract)}>
            <div className={styles.explainerText}>
                <h2 className={styles.heading}>{heading}</h2>
                <p>{body.join(' ')}</p>
            </div>
           <div className={styles.toggleDiv} onClick={handleToggle}>
               <p className={styles.toggleText}>{revealed ? 'See less' : 'See more'}</p>
               <img className={clsx(styles.toggleArrow,
                                    revealed && styles.upArrow,
                                    !revealed && styles.downArrow)} src={`/img/campaign/${isDarkTheme ? 'white' : 'black'}-arrow.svg`} />
            </div>
        </div>
    
    )
}