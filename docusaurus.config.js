const path = require('path');

module.exports = {
  title: 'Tezos',
  tagline: 'The tagline of my site',
  url: 'https://tezos.com',
  baseUrl: '/',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pl'],
    localeConfigs: {
      en: {
        label: 'English',
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
          to: 'docs/learn/what-is-tezos',
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
        }
      ],
    },
    colorMode: {
      disableSwitch: true,
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Start Learning',
              to: 'docs/learn/what-is-tezos',
            },
            {
              label: 'Developer Portal',
              to: 'developer-portal',
            },
            {
              label: 'Sitemap',
              to: 'docs/sitemap/home',
            }
          ],
        },
        {
          title: 'Updates & Announcements',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/tezos'
            },
            {
              label: 'Telegram',
              href: 'https://t.me/tezosplatform'
            }
          ]
        },
        {
          title: 'Development',
          items: [
            {
              label: 'Slack',
              href: '/'
            },
            {
              label: 'GitLab',
              href: 'https://gitlab.com/tezos/tezos',
            },
            {
              label: 'Stack Exchange',
              href: 'https://tezos.stackexchange.com/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Agora',
              href: 'https://agora.tezos.com/',
            },
            {
              label: 'Riot',
              href: 'https://riot.tzchat.org/',
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/r/tezos',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/tqtezos/tezos.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tezos, Inc. Built with Docusaurus.`,
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
