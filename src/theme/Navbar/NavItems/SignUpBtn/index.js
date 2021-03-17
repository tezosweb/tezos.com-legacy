import React from 'react'
import clsx from 'clsx'
import { ModalContext } from 'context/newsletter-modal-context'
import styles from './styles.module.css'

function SignUpBtn({ header }) {
    return (
        <ModalContext.Consumer>
            {({ openModal }) => (
                <a
                    className={clsx(`"navbar__item navbar__link"`, header && styles.headerButton)}
                    onClick={(e) => {
                        e.preventDefault();
                        openModal({ open: true })
                    }}>
                        <div className={styles.signUpBtn}>
                            Sign Up For Updates
                        </div>
                </a>
            )}
        </ModalContext.Consumer>
    )
}

export default SignUpBtn