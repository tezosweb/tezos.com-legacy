import React from 'react'
import styles from './styles.module.css'
import clsx from 'clsx';
import { ModalContext as NewletterSignUp } from 'context/newsletter-modal-context'

const Button = ({ 
        text, 
        href, 
        inverse, 
        whiteAndBlue,
        devPortal,
        newsletter,  
        submitCB, 
        validEmail, 
        closeModal }) => {
    if (newsletter) {
        return (
            <NewletterSignUp.Consumer>
                {({ openModal }) => (
                    <a
                        className={clsx(styles.buttonPrimary, 
                                        inverse && styles.inverse,
                                        submitCB && styles.wideBtn,
                                        styles.btnActual,
                                        validEmail === false && styles.inactive)}
                        onClick={(e) => {
                            e.preventDefault()
                            submitCB ? validEmail && submitCB() : openModal({ open: true })
                        }}
                    >
                            {text}
                    </a>
                )}
            </NewletterSignUp.Consumer>
        )
    } else {
        return (
            <a 
                className={clsx(styles.buttonPrimary, 
                            inverse && styles.inverse,
                            whiteAndBlue && styles.whiteAndBlue,
                            devPortal && styles.devPortal)}
                href={href}
                target={href.slice(0, 4) === 'http' ? "_blank" : ""}
                rel="noopener noreferrer"
                onClick={closeModal ? closeModal : null}>
                {text}
            </a>
        )
    }
}

export default Button