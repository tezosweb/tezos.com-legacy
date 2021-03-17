import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import Wrapper from 'components/Wrapper';
import colors from 'src/css/colors';

import Welcome from 'docs/home/welcome.mdx'
import Jobs from 'docs/home/jobs.mdx'
import Updates from 'docs/home/updates.mdx'
import CTASection from 'docs/home/ctasection.mdx'

import MDXHome from 'docs/home.mdx'
import PLHome from 'docs/pl/home.mdx'

const MDXImports = {
  home: {
    '/': (<MDXHome />),
    '/pl/': (<PLHome />)
  },
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Tezos is an open-source platform for assets and applications backed by a global community of validators, researchers, and builders."
      permalink="https://tezos.com">
      <main>
          <Welcome />
          <Jobs />
          <Wrapper bg={colors.darkBlue} color={colors.white} updates id="tezos-updates">
                <div className={styles.updatesContent}>
                  <Updates />
                </div>
          </Wrapper>
          <CTASection />
      </main>
    </Layout>
  );
}

export default Home;

