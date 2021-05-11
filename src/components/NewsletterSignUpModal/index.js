import React, { useState, useEffect, useContext } from 'react'
import clsx from 'clsx'
import Button from 'components/Button'
import { ModalContext } from 'context/newsletter-modal-context'
import styles from './styles.module.css'
import addToMailchimp from 'utils/mailchimp'

function EmailForm({ 
        email, 
        setEmail, 
        error, 
        setError, 
        onSubmit,
        title,
        description,
        placeholder,
        button
         }) {
    const validEmail = /\S+@\S+\.\S+/.test(email)
    return (
        <>
            <h1 className={styles.title}>
                {title}
            </h1>
            <p className={styles.description}>
                {description}
            </p>
            <input className={styles.input}
                placeholder={placeholder}
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
                text={button}
                newsletter
                validEmail={validEmail}
                submitCB={() => validEmail && onSubmit()} 
            />
            </div>
        </>
    )
}

function onSubscribe(email, setComplete, campaign) {
    const fields = { 'group[5][1]': '1' };
    if (campaign) fields['CAMPAIGN'] = campaign;
    addToMailchimp(email, fields)
        .then((_data) => setComplete(true))
        .catch((err) => console.log('error', err))
}

function ModalContent(props) {
    const [ complete, setComplete ] = useState(false)
    const [ error, setError ] = useState(null)
    const [ email, setEmail ] = useState('')

    const { title,
        description,
        placeholder,
        button,
        thankYou,
        updateText,
        updateLinkText,
        signUpCampaign } = props;

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
                <h1 className={clsx(styles.title, styles.thanks)}>{thankYou}</h1>
                <p className={styles.confirmation}>
                    
                    {updateText}{' '}
                    <a 
                        className={styles.twitterLink} 
                        href="https://twitter.com/tezos/" 
                        target="_blank"
                        rel="noopener noreferrer">
                            {updateLinkText}
                    </a>.
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
            title={title}
            description={description}
            placeholder={placeholder}
            button={button}
            onSubmit={() => onSubscribe(email, setComplete, signUpCampaign)}
        />
    )
}

function NewsletterSignUpModal({ title,
    description,
    placeholder,
    button,
    thankYou,
    updateText,
    updateLinkText,
    signUpCampaign}) {

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
                                    <ModalContent 
                                        open={state.open} 
                                        title={title}
                                        description={description}
                                        placeholder={placeholder}
                                        button={button}
                                        thankYou={thankYou}
                                        updateText={updateText}
                                        updateLinkText={updateLinkText}
                                        signUpCampaign={signUpCampaign}/>
                        </div>
                        </div>
                    </>
                )
            }}
        </ModalContext.Consumer>
    )
}

export default NewsletterSignUpModal