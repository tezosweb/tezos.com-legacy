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

// MDX Locale-specific Imports
import DevPortalMDX from 'docs/developer-portal.mdx';
import PLDevPortal from 'docs/pl/developer-portal.mdx';

const MDXImports = {
  devPortal: {
    '/': (<DevPortalMDX />),
    '/pl/': (<PLDevPortal />)
  },
}

function DeveloperPortal() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
      <Layout
        title={'Tezos Developer Portal'}
        description="Welcome to the Tezos Developer Portal. Explore and find the tools you need to get started building on Tezos right now.">
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
                {MDXImports.devPortal[siteConfig.baseUrl]}
            </div>
        </main>
      </Layout>
    );
  }
  
  export default DeveloperPortal;
