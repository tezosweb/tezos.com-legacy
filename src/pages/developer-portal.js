import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import DevPortalHeader from 'components/DevPortalHeader';
import Button from '../components/Button';
import styles from './developer-portal.module.css';
import Translate from '@docusaurus/Translate';

function DeveloperPortal() {
    const {siteConfig, codeTranslations} = useDocusaurusContext();

    const DevPortal = require(`../../docs${siteConfig.baseUrl}developer-portal.mdx`).default;

    return (
      <Layout
        title={codeTranslations["Tezos Developer Portal"]}
        description={codeTranslations["Dev Portal Meta"]}>
         <DevPortalHeader 
            title={<Translate>Tezos Developer Portal</Translate>}
            tagline={<Translate>Developer Support Channels:</Translate>}
            emailListLabel={<Translate>Developer Mailing List:</Translate>}
            contributeBtn={<Translate>Contribute To Dev Portal</Translate>}
            placeholder={<Translate>Email</Translate>}
            button={<Translate>Submit</Translate>}
            success={<Translate>Thank you for subscribing!</Translate>}
            />
        <main>
            <div className={clsx('container', styles.mdxContainer)}>
                <DevPortal />
            </div>
        </main>
      </Layout>
    );
  }
  
  export default DeveloperPortal;
