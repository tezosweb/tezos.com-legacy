import clsx from 'clsx'
import React, { useState } from 'react'
import addToMailchimp from 'utils/mailchimp'
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

function formSubmit(e, email, setState, setEmail) {
    e.preventDefault()

    if (!validEmail(email)) {
        return
    }

    addToMailchimp(email)
        .then((data) => {

            if (data.msg.includes('already subscribed')) {
                setState({
                    message: 'This email address is already subscribed!',
                    status: data.result
                })
            } 

            if (data.result === 'success') {
                setState({
                    message: 'Thank you for subscribing!',
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

function EmailSignUp({ label, placeholder, buttonLabel, devPortal }) {
    const [ email, setEmail ] = useState('')
    const [ state, setState ] = useState({ status: 'ready', message: '' })

    let inactive = !validEmail(email)

    return (
        <form
            className={styles.form}
            onSubmit={(e) => formSubmit(e, email, setState, setEmail)}
            id="newsletter-form"
        >
            <h3>
                <label className={clsx(styles.label, devPortal && 'hero__subtitle')} htmlFor="mailing-list-email">{label}</label>
            </h3>
            <div className={clsx(styles.signUpContainer, devPortal && styles.devPortal)}>
                <input 
                    className={styles.emailField}
                    id="mailing-list-email"
                    type="email"
                    placeholder={placeholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className={clsx(styles.submit, inactive && styles.inactive)} 
                    type="submit"
                    value={buttonLabel}
                />
                <p 
                    className={styles.response}
                    style={{ color: statusUpdate(state.status)}}
                >
                    {state.message}
                </p>
            </div>
        </form>
    )
}

export default EmailSignUp