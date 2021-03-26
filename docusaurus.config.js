const path = require('path');

module.exports = {
  title: 'Tezos',
  tagline: 'The tagline of my site',
  url: 'https://tezos.com',
  baseUrl: '/',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'pl'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      fr : {
        label: 'Français'
      },
      pl: {
        label: 'Igpay Atinlay',
      },
    },
  },
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon.png',
  organizationName: 'tqtezos', // Usually your GitHub org/user name.
  projectName: 'tezos.com', // Usually your repo name.
  themeConfig: {
    image: 'img/Tezos_MetaImage.png',
    gtag: {
      trackingID: 'GTM-5FGG778',
      anonymizeIP: true,
    },
    announcementBar: {
      id: 'supportus',
      content:
        '💡 We\'re in the process of a site redesign. Give us your input on <a target="_blank" rel="noopener noreferrer" href="https://github.com/tqtezos/tezos.com">GitHub</a>! 💡',
    },
    navbar: {
      title: 'Tezos',
      logo: {
        alt: 'Tezos Logo',
        src: 'img/logo-tezos.svg',
      },
      items: [
        {
          to: 'docs/learn/get-started',
          label: 'Get Started',
          activeBasePath: 'docs/learn',
          position: 'left',
        },
        {
          to: 'developer-portal',
          label: 'Developer Portal',
          position: 'left'
        },
        {
          href: 'https://github.com/tqtezos/tezos.com',
          label: 'Fork Me On GitHub!',
          className: 'fork-on-github',
          position: 'right',
        },
        {
          href: 'email',
          label: 'Sign Up For Updates',
          position: 'right'
        }
      ],
    },
    colorMode: {
      switchConfig: {
        lightIcon: ' ',
        darkIcon: ' ',
      }
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Follow Tezos:',
          items: [
            {
              label: 'Twitter',
              to: 'https://twitter.com/tezos',
            },
            {
              label: 'Telegram',
              to: 'https://t.me/tezosplatform',
            },
            {
              label: 'Reddit',
              to: 'https://www.reddit.com/r/tezos',
            },
            {
              label: 'Tezos Agora',
              to: 'https://forum.tezosagora.org/',
            },
            {
              label: 'Stack Exchange',
              to: 'https://tezos.stackexchange.com/',
            },
            {
              label: 'Riot',
              to: 'https://riot.tzchat.org/',
            },
            {
              label: 'GitLab',
              to: 'https://gitlab.com/tezos/tezos',
            },
            {
              label: 'Discord',
              to: 'https://discord.com/invite/udZwhQn',
            }
          ],
        },
        {
          title: 'Sign Up For The Tezos Newsletter:',
          items: [
            {
              label: 'Email',
              href: 'placeholder'
            },
            {
              label: 'Submit',
              href: 'submit'
            },
            {
              label: 'Thank you for subscribing!',
              href: 'success'
            },
            {
              label: 'This email address is already subscribed!',
              href: 'duplicate'
            }
          ]
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/tqtezos/tezos.com/tree/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/tqtezos/tezos.com/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [path.resolve(__dirname, 'plugins/rootNavPlugin')]
};
