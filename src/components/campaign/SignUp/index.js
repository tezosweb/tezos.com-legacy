import React, {useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import { campNameParse } from 'utils/helpers';

import addToMailchimp from 'utils/mailchimp'
import styles from './styles.module.css';

function SignUp({ history, campaign }) {
  const [ email, setEmail ] = useState('')
  const [ error, setError ] = useState(false)

  const validEmail = /\S+@\S+\.\S+/.test(email)

  function updateEmail(e) {
      setEmail(e.target.value)
  }

  function onSubmit() {
    addToMailchimp(email, { CAMPAIGN: campNameParse(campaign) })
        .then((_data) => {
            error && setError(false)
            setEmail('')
            history.push(`/${campaign}/sign-up-confirmation`)
        })
        .catch((err) => {
            setError(true)
            setEmail('')
        })

  }

  return (
    <Layout
      title="Sign Up"
      description="Stay updated with the latest advancements in the Tezos ecosystem."
      image="/img/discover-tezos.jpg"
      signUpCampaign={campNameParse(campaign)}
      >

      <main>
          <div className={clsx('container', styles.signUpWrapper)}>
              <h1 className={styles.signUpHeader}>Keep in touch</h1>
              <h2 className={styles.subHeading}>Stay updated with the latest advancements in the Tezos ecosystem.</h2>
              <h3>Sign up below to join the Tezos mailing list.</h3>
                <div className={styles.inputBlock}>
                    <input 
                        className={clsx(error && styles.errorBox)} 
                            placeholder="Email" 
                            type="email" 
                            onChange={updateEmail}
                            onKeyPress={validEmail ? (e) => {
                                if (e.key === 'Enter') onSubmit()
                            } : undefined}
                            value={email}></input>
                    <span className={clsx(styles.asterisk, error && styles.errorAsterisk)}>*</span>
                </div>
                        <div className={clsx(styles.error, error && styles.visible)}>
                            <div className={styles.exclamation}>
                                <p>!</p></div> 
                            <p className={styles.errorMessage}>There’s something wrong with that email. Try again.</p>
                        </div>
                <div className={styles.subscribeBtn}>
                        <div 
                        className={clsx(styles.submit,
                                    !validEmail && styles.inactive,
                                    validEmail && styles.active)}
                        onClick={(e) => {
                            e.preventDefault();
                            validEmail && onSubmit();
                        }}
                        >
                            <h4>Subscribe</h4>
                            </div>
                        </div>
          </div>
      </main>
    </Layout>
  );
}

export default SignUp;

