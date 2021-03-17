import React, { useState, useEffect, useContext } from 'react'
import clsx from 'clsx'
import Button from 'components/Button'
import { ModalContext } from 'context/newsletter-modal-context'
import styles from './styles.module.css'
import addToMailchimp from 'utils/mailchimp'

function EmailForm({ email, setEmail, error, setError, onSubmit }) {
    const validEmail = /\S+@\S+\.\S+/.test(email)
    return (
        <>
            <h1 className={styles.title}>
                Tezos Updates
            </h1>
            <p className={styles.description}>
                Sign up to receive news and updates on ecosystem development, tools, and
                upcoming events.
            </p>
            <input className={styles.input}
                placeholder="Your Email"
                type="email"
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        validEmail && onSubmit()
                    }
                }}
                value={email}>
            </input>
            <div className={styles.buttonContainer}>
            <Button
                text="Sign Me Up"
                newsletter
                validEmail={validEmail}
                submitCB={() => validEmail && onSubmit()} 
            />
            </div>
        </>
    )
}

function onSubscribe(email, setComplete) {
    addToMailchimp(email, { 'group[5][1]': '1' })
        .then((_data) => setComplete(true))
        .catch((err) => console.log('error', err))
}

function ModalContent(props) {
    const [ complete, setComplete ] = useState(false)
    const [ error, setError ] = useState(null)
    const [ email, setEmail ] = useState('')

    useEffect(() => {
        if (props.open) {
            setEmail('')
            setError(null)
            setComplete(false)
        }
    }, [props.open])

    // Add Twitter logo here
    if (complete) {
        return (
            <>
                <h1 className={styles.title}>Thank You For Signing Up</h1>
                <p className={styles.confirmation}>
                    
                    For real-time updates follow{' '}
                    <a 
                        className={styles.twitterLink} 
                        href="https://twitter.com/tezos/" 
                        target="_blank"
                        rel="noopener noreferrer">
                            @Tezos on Twitter
                    </a>
                </p>
            </>
        )
    }

    return (
        <EmailForm
            email={email}
            setEmail={setEmail}
            error={error}
            setError={setError}
            onSubmit={() => onSubscribe(email, setComplete)}
        />
    )
}

function NewsletterSignUpModal() {

    const { openModal } = useContext(ModalContext)

    function escClose(e) {
        if (e.keyCode === 27 || e.code === 'Escape') {
            openModal({ open: false })
        }
    }

    useEffect(() => {
        document.addEventListener('keyup', (e) => {
            escClose(e)
        })

        return () => {
            document.removeEventListener('keyup', escClose, true)
        }

    }, [])
    
    return (
        <ModalContext.Consumer>
            {({ state, openModal }) => {
                return (
                    <>
                        <div className={clsx(styles.background, state.open && styles.backgroundOpen)}
                            onClick={() => openModal({ open: false })}>
                        </div>
                        <div className={clsx(styles.modal, state.open && styles.modalOpen)}>
                            <div className={styles.modalWrap}>
                                    <button 
                                        className={styles.closeButton}
                                        onClick={(e) => {
                                            openModal({ open: false })
                                            e.preventDefault()
                                        }}>
                                            close
                                    </button>
                                    <ModalContent open={state.open} />
                        </div>
                        </div>
                    </>
                )
            }}
        </ModalContext.Consumer>
    )
}

export default NewsletterSignUpModal