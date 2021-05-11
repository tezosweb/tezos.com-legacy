/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 import React from 'react';
 import clsx from 'clsx';
 
 import Link from '@docusaurus/Link';
 import {FooterLinkItem, useThemeConfig} from '@docusaurus/theme-common';
 import useBaseUrl from '@docusaurus/useBaseUrl';
 import styles from './styles.module.css';
 import ThemedImage, {Props as ThemedImageProps} from '@theme/ThemedImage';
 import SocialImg from 'components/SocialImg'
 import EmailSignUp from 'components/EmailSignUp'
 
 function FooterLink({to, href, label, prependBaseUrlToHref, ...props}) {
   const toUrl = useBaseUrl(to);
   const normalizedHref = useBaseUrl(href, {forcePrependBaseUrl: true});
 
   return (
     <Link
       className="footer__link-item"
       {...(href
         ? {
             href: prependBaseUrlToHref ? normalizedHref : href,
           }
         : {
             to: toUrl,
           })}
       {...props}>
       {label}
     </Link>
   );
 }
 
 const FooterLogo = ({
   sources,
   alt,
 }) => (
   <ThemedImage className="footer__logo" alt={alt} sources={sources} />
 );
 
 function Footer({ signUpCampaign }) {
   const {footer} = useThemeConfig();
 
   const {copyright, links = [], logo = {}} = footer || {};
   const sources = {
     light: useBaseUrl(logo.src),
     dark: useBaseUrl(logo.srcDark || logo.src),
   };
 
   if (!footer) {
     return null;
   }

   const social = links[0]
   const email = links[1]
 
   function iconPath(name) {
     return `/img/icons/social-icon-${name.toLowerCase().split(' ').join('-')}.svg`
   }
 
   return (
    <footer className={clsx('footer', 
        { 'footer--dark': footer.style === 'dark' },
        styles.footer)}>
          <div className={clsx('container', styles.footerContainer)}>
            <div className={clsx('row', styles.footerRow)}>
              <div className={clsx('col', styles.footerCol)}>
              <div>
              <h3 className={styles.socialHeader}>{social.title}</h3>
              <div className={styles.socialLinks}>
              {social.items.map((app, i) =>(
                  <span key={`soc${i}`}>
                    <SocialImg text={app.label} link={app.to} img={iconPath(app.label)}/>
                  </span>
                  )
              )}
              </div>

              </div>
              </div>
              <div className={clsx('col', styles.footerCol)}>
              <EmailSignUp
                  label={email.title}
                  placeholder={email.items[0].label}
                  buttonLabel={email.items[1].label}
                  success={email.items[2].label}
                  duplicate={email.items[3].label}
                  signUpCampaign={signUpCampaign}
                />
              </div>
            </div>
          </div>
    </footer>
      );
 }
 
 export default Footer;
 