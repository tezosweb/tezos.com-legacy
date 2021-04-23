import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import Wrapper from 'components/Wrapper';
import Translate from '@docusaurus/Translate';
import colors from 'src/css/colors';

function Home() {
  const {codeTranslations, siteConfig} = useDocusaurusContext();

  const Welcome = require(`../../docs${siteConfig.baseUrl}home/welcome.mdx`).default;
  const Jobs = require(`../../docs${siteConfig.baseUrl}home/jobs.mdx`).default;
  const Updates = require(`../../docs${siteConfig.baseUrl}home/updates.mdx`).default;
  const CTASection = require(`../../docs${siteConfig.baseUrl}home/ctasection.mdx`).default;
 

  return (
    <Layout
      title={`${siteConfig.title}`}
      description={codeTranslations["Home Meta"]}
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

