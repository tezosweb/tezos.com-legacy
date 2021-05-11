import React, {useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import cities from 'data/campaign/nfts.json';

import addToMailchimp from 'utils/mailchimp'
import styles from './styles.module.css';

function NFTSignUp({ history, city }) {
  const [ email, setEmail ] = useState('')
  const [ zipcode, setZipcode ] = useState('')
  const [ emailError, setEmailError ] = useState(false)

  const validEmail = /\S+@\S+\.\S+/.test(email)
  const validZipCode = zipcode.length >= 0 && zipcode.length < 13;

  function updateEmail(e) {
      setEmail(e.target.value)
  }

  function updateZipcode(e) {
      setZipcode(e.target.value)
  }

  function onSubmit() {

    addToMailchimp(email, { CAMPAIGN : `${city} ${cities[city].nft}`, ZIPCODE: zipcode })
        .then((_data) => {
            emailError && setEmailError(false)
            setEmail('')
            setZipcode('')
            history.push(`/${cities[city].campaign}-confirmation`)
        })
        .catch((err) => {
            setEmailError(true)
            setEmail('')
        })

  }

  return (
    <Layout
      title={`${cities[city].nft} Sign Up`}
      description="Sign up for instructions on how to claim your clean NFT."
      image={`/img/${city}-meta.jpg`}
      wrapperClassName={styles.signUpPage}
      signUpCampaign={`${city} ${cities[city].nft}`}>

      <main>
        <div className={clsx('container', styles.signUpWrapper)}>
            <div className={styles.container}>
                <div>
                <div className={styles.headingContainer}>
                    <h1 className={styles.signUpHeader}>
                        Hey {city}, <br />
                        this {cities[city].nft.toLowerCase()} NFT is on <span style={{whiteSpace: 'nowrap'}}>Tezos {'>'}</span>
                    </h1>
                </div>
                <div className={styles.nftContainerOne}>
                    <img draggable="false" src={`/img/campaign/nft/${cities[city].nft.toLowerCase()}.svg`} alt={`${city} ${cities[city].nft}`}/>
                </div>
          
                <h2 className={styles.subHeading}>Drop your email below to receive instructions on how to claim your clean NFT.</h2>
                    <div className={styles.inputBlock}>
                        <input 
                            className={clsx(emailError && styles.errorBox)} 
                                placeholder="Email" 
                                type="email" 
                                onChange={updateEmail}
                                onKeyPress={validEmail ? (e) => {
                                    if (e.key === 'Enter') onSubmit()
                                } : undefined}
                                value={email}></input>
                        <span className={clsx(styles.asterisk, emailError && styles.errorAsterisk)}>*</span>
                    </div>
                    <div className={clsx(styles.inputBlock, styles.zipcode)}>
                        <input 
                                placeholder="Zip Code" 
                                type="zipcode" 
                                onChange={updateZipcode}
                                onKeyPress={validEmail ? (e) => {
                                    if (e.key === 'Enter') onSubmit()
                                } : undefined}
                                value={zipcode}></input>
                    </div>

                    <div className={clsx(styles.error, emailError && styles.visible)}>
                        <div className={styles.exclamation}>
                            <p>!</p>
                        </div> 
                        <p className={styles.errorMessage}>There’s something wrong with that email. Try again.</p>
                    </div>

                    <div className={styles.subscribeBtn}>
                            <div 
                            className={clsx(styles.submit,
                                        (!validEmail || !validZipCode) && styles.inactive,
                                        validEmail && validZipCode && styles.active)}
                            onClick={(e) => {
                                e.preventDefault();
                                validEmail && onSubmit();
                            }} 
                            >
                                <div className={styles.submitGroup}>
                                    <h3>Pick up your {cities[city].nft.toLowerCase()} NFT</h3>
                                    <div className={styles.arrow} ></div>
                                </div>
                            </div>
                    </div>
                </div>
                    <div className={styles.nftContainerTwo}>
                        <img draggable="false" src={`/img/campaign/nft/${cities[city].nft.toLowerCase()}.svg`} alt={`${city} ${cities[city].nft}`}/>
                    </div>
                </div>
          </div>
      </main>
    </Layout>
  );
}

export default NFTSignUp;

