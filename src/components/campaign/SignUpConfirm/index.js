import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import cities from 'data/campaign/nfts.json';
import Head from '@docusaurus/Head';

function SignUpConfirm({ campaign, city }) {
  return (
    <Layout
      title={city ? `${cities[city].nft} NFT Confirmed` : 'Sign Up Confirmed'}
      description={city ? `Your ${cities[city].nft.toLowerCase()} NFT is in the works.` : 'You\'ve been added to the mailing list.'}
      image={city ? `/img/${city}-meta.jpg` : `/img/discover-tezos.jpg`}
      wrapperClassName = {city && styles.cityConfirm}>
    
    <Head>
      <meta name="robots" content="noindex" />
    </Head>


      <main>
          <div className={clsx('container', styles.confirmationWrapper)}>
              <h1 className={styles.confirmationHeader}>
                  {city ? `Your ${cities[city].nft.toLowerCase()} NFT is in the works!` : 'You\'ve been added to the mailing list.'}
              </h1>
              { campaign && <Link to={`/${campaign}`}>
                  <h2>Stay tuned for what's to come.</h2>
              </Link> }
              { city && <h2 className={styles.nftSubheading}>Stay tuned for an email about how to pick up your clean NFT.</h2>}
          </div>

      </main>

    </Layout>
  );
}

export default SignUpConfirm;

