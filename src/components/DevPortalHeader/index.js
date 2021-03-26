import React from 'react';
import clsx from 'clsx';
import Button from '../Button';
import SocialImg from 'components/SocialImg';
import EmailSignUp from 'components/EmailSignUp';
import styles from './styles.module.css';

const socialMedia = [
     {
        text: 'Stack Exchange',
        link: 'https://tezos.stackexchange.com/',
        img: '/img/icons/social-icon-stack-exchange.svg'
      },
      {
        text: 'Telegram',
        link: 'https://t.me/TezosDevelopers',
        img: '/img/icons/social-icon-telegram.svg'
      },
      {
        text: 'Riot',
        link: 'https://riot.tzchat.org/#/room/#freenode_#tezos:matrix.org',
        img: '/img/icons/social-icon-riot.svg'
      },
      {
        text: 'GitLab',
        link: 'https://gitlab.com/tezos/tezos',
        img: '/img/icons/social-icon-gitlab.svg'
      }
]

const DevPortalHeader = ({ title, tagline, emailListLabel, contributeBtn, success, placeholder, button }) => (
    <header className={clsx('hero hero--primary', styles.heroDevPortal)}>
          <div className="container">
              <div className={clsx('row', styles.contributeButtonSection)}>
                    <Button 
                        text={contributeBtn}
                        href="https://github.com/tqtezos/tezos.com/blob/main/docs/developer-portal.mdx"
                        devPortal
                        />
              </div>
              <div className="row">
                  <div className="container">
                    <h1 className={clsx('heroTitle', styles.title)}>{title}</h1>
                    <div className={styles.supportSection}>
                        <div>
                            <p className="hero__subtitle">{tagline}</p>
                            {socialMedia.map((app, i) =>(
                                <span key={`soc${i}`}>
                                    <SocialImg text={app.text} link={app.link} img={app.img}/>
                                </span>
                                )
                            )}
                        </div>
                        <div className={styles.signUp}>
                            <EmailSignUp 
                                label={emailListLabel}
                                placeholder={placeholder}
                                buttonLabel={button}
                                devPortal
                                success={success}
                            />
                        </div>
                    </div>
                 </div>
            </div>
          </div>
        </header>
)

export default DevPortalHeader;