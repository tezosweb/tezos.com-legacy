/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { useThemeConfig } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import SocialImg from 'components/SocialImg'
import EmailSignUp from 'components/EmailSignUp'

const socialMedia = [
  {
    text: 'Twitter',
    link: 'https://twitter.com/tezos',
    img: '/img/icons/social-icon-twitter.svg'
  },
  {
    text: 'Telegram',
    link: 'https://t.me/tezosplatform',
    img: '/img/icons/social-icon-telegram.svg'
  },
  {
    text: 'Discord',
    link: 'https://discord.gg/XRHZgze',
    img: '/img/icons/social-icon-discord.svg'
  },
  {
    text: 'Reddit',
    link: 'https://www.reddit.com/r/tezos',
    img: '/img/icons/social-icon-reddit.svg'
  },
  {
    text: 'Tezos Agora',
    link: 'https://forum.tezosagora.org/',
    img: '/img/icons/social-tezos.svg'
  },
  {
    text: 'Stack Exchange',
    link: 'https://tezos.stackexchange.com/',
    img: '/img/icons/social-icon-stack-exchange.svg'
  },
  {
    text: 'Riot',
    link: 'https://riot.tzchat.org/',
    img: '/img/icons/social-icon-riot.svg'
  },
  {
    text: 'GitLab',
    link: 'https://gitlab.com/tezos/tezos',
    img: '/img/icons/social-icon-gitlab.svg'
  }
]

function FooterLink({
  to,
  href,
  label,
  prependBaseUrlToHref,
  ...props
}) {
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, {
    forcePrependBaseUrl: true
  });
  return <Link className="footer__link-item" {...href ? {
    target: '_blank',
    rel: 'noopener noreferrer',
    href: prependBaseUrlToHref ? normalizedHref : href
  } : {
    to: toUrl
  }} {...props}>
      {label}
    </Link>;
}

const FooterLogo = ({
  url,
  alt
}) => <img className="footer__logo" alt={alt} src={url} />;

function Footer() {
  const {
    footer
  } = useThemeConfig();
  const {
    copyright,
    links = [],
    logo = {}
  } = footer || {};
  const logoUrl = useBaseUrl(logo.src);

  if (!footer) {
    return null;
  }

  return <footer className={clsx('footer', 
              { 'footer--dark': footer.style === 'dark' },
              styles.footer)}>
	<div className={clsx('container', styles.footerContainer)}>
    <div className={clsx('row', styles.footerRow)}>
      <div className={clsx('col', styles.footerCol)}>
        <h3 className={styles.socialHeader}>Follow Tezos:</h3>
        <div className={styles.socialLinks}>
          {socialMedia.map((app, i) =>(
              <span key={`soc${i}`}>
                <SocialImg text={app.text} link={app.link} img={app.img}/>
              </span>
              )
          )}
        </div>
      </div>
      <div className={clsx('col', styles.footerCol)}>
        <EmailSignUp
            label="Sign Up For The Tezos Newsletter:"
            placeholder="Email"
            buttonLabel="Submit"
            />
      </div>
    </div>

        {/* {links && links.length > 0 && <div className="row footer__links">
            {links.map((linkItem, i) => <div key={i} className="col footer__col">
                {linkItem.title != null ? <h4 className="footer__title">{linkItem.title}</h4> : null}
                {linkItem.items != null && Array.isArray(linkItem.items) && linkItem.items.length > 0 ? <ul className="footer__items">
                    {linkItem.items.map((item, key) => item.html ? <li key={key} className="footer__item" // Developer provided the HTML, so assume it's safe.
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: item.html
            }} /> : <li key={item.href || item.to} className="footer__item">
                          <FooterLink {...item} />
                        </li>)}
                  </ul> : null}
              </div>)}
          </div>}
        {(logo || copyright) && <div className="footer__bottom text--center">
            {logo && logo.src && <div className="margin-bottom--sm">
                {logo.href ? <a href={logo.href} target="_blank" rel="noopener noreferrer" className={styles.footerLogoLink}>
                    <FooterLogo alt={logo.alt} url={logoUrl} />
                  </a> : <FooterLogo alt={logo.alt} url={logoUrl} />}
              </div>}
            {copyright ? <div className="footer__copyright" // Developer provided the HTML, so assume it's safe.
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: copyright
        }} /> : null}
          </div>} */}
      </div>
    </footer>;
}

export default Footer;
