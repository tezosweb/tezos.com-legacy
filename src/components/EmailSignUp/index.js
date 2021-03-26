import clsx from 'clsx'
import React, { useState } from 'react'
import addToMailchimp from 'utils/mailchimp'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css'

function statusUpdate(status) {
    let color = 'white'
    switch (status) {
        case 'error':
            color = 'red'
            break
        case 'success':
            color = 'green'
            break
        case 'ready':
            color = 'white'
            break
        default:
            color = 'white'
            break
    }
    return color
}

function validEmail(email) {
    return /\S+@\S+\.\S+/.test(email)
}

function formSubmit(e, email, setState, setEmail, success) {
    e.preventDefault()

    if (!validEmail(email)) {
        return
    }

    addToMailchimp(email)
        .then((data) => {

            if (data) {
                setState({
                    message: success || 'Thank you for subscribing!',
                    status: data.result
                })

                setEmail('')
                
                setTimeout(() => {
                    setState({
                        status: 'ready',
                        message: ''
                    })
                }, 5000)
            }
        })
        .catch(err => console.error(err))
}

function EmailSignUp({ label, placeholder, buttonLabel, devPortal, success  }) {
    const [ email, setEmail ] = useState('')
    const [ state, setState ] = useState({ status: 'ready', message: '' })
    const { codeTranslations } = useDocusaurusContext();

    let inactive = !validEmail(email)

    return (
        <form
            className={styles.form}
            onSubmit={(e) => formSubmit(e, email, setState, setEmail, success )}
            id={`newsletter-form-${devPortal ? '2' : '1'}`}
        >
            <h3>
                <label className={clsx(styles.label, devPortal && 'hero__subtitle')} htmlFor="mailing-list-email">{label}</label>
            </h3>
            <div className={clsx(styles.signUpContainer, devPortal && styles.devPortal)}>
                <input 
                    className={styles.emailField}
                    id={`mailing-list-email-${devPortal ? '2' : '1'}`}
                    type="email"
                    placeholder={typeof placeholder === 'string' ? placeholder : codeTranslations["Email"]}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className={clsx(styles.submit, inactive && styles.inactive)} 
                    type="submit"
                    value={typeof buttonLabel === 'string' ? buttonLabel : codeTranslations["Submit"]}
                />
                <p 
                    className={styles.response}
                    style={{ color: 'green'}}
                >
                    {state.message}
                </p>
            </div>
        </form>
    )
}

export default EmailSignUp