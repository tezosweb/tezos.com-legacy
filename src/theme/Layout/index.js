/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import SkipToContent from '@theme/SkipToContent';
import AnnouncementBar from '@theme/AnnouncementBar';
import Navbar from '@theme/Navbar';
import Footer from '@theme/Footer';
import LayoutProviders from '@theme/LayoutProviders';
import LayoutHead from '@theme/LayoutHead';
import useKeyboardNavigation from '@theme/hooks/useKeyboardNavigation';
import {ThemeClassNames} from '@docusaurus/theme-common/src/utils/ThemeClassNames';
import ModalsWrapper from 'components/ModalsWrapper';
import './styles.css'
import '../../../node_modules/flickity/css/flickity.css'

function Layout(props) {
  const {children, noFooter, wrapperClassName, pageClassName, signUpCampaign, legal} = props;

  useKeyboardNavigation();

  return (
    <LayoutProviders>
      <LayoutHead {...props} />

      <SkipToContent />

      <ModalsWrapper signUpCampaign={signUpCampaign} legal={legal}>

      <AnnouncementBar />

      <Navbar />

      <div
        className={clsx(
          'main-wrapper',
          wrapperClassName,
          pageClassName,
        )}>
        {children}
      </div>

      {!noFooter && <Footer signUpCampaign={signUpCampaign}/>}

      </ModalsWrapper>
    </LayoutProviders>
  );
}

export default Layout;

