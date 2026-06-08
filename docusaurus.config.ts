import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Borderra',
  tagline: 'Towns. Nations. Territory.',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://borderra.com',
  baseUrl: '/',
  organizationName: 'Borderra',
  projectName: 'borderra.com',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    metadata: [
      {
        name: 'description',
        content:
          'Borderra is a geopolitical Minecraft server built around towns, nations, player-made territory, Towny, QuickShop, mcMMO, and custom-developed gameplay systems.',
      },
      {property: 'og:image:width', content: '1200'},
      {property: 'og:image:height', content: '630'},
      {property: 'og:image:alt', content: 'Borderra geopolitical Minecraft server preview'},
      {name: 'twitter:card', content: 'summary_large_image'},
    ],
    navbar: {
      title: '',
      logo: {
        alt: 'Borderra logo',
        src: 'img/logo.svg',
      },
      items: [
        {href: 'https://map.borderra.com', label: 'Map', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'borderraSidebar',
          docsPluginId: 'default',
          position: 'left',
          label: 'Guide',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/community', label: 'Community', position: 'left'},
        {href: 'https://store.borderra.com', label: 'Store', position: 'left'},
        {
          to: '/docs/ip',
          label: 'Play',
          position: 'right',
          className: 'menuJoinButton',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Borderra',
          items: [
            {label: 'Play', to: '/docs/ip'},
            {label: 'Guide', to: '/docs'},
            {label: 'Map', href: 'https://map.borderra.com'},
            {label: 'Store', href: 'https://store.borderra.com'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'Discord', href: 'https://discord.gg/EhuM7BaJ68'},
            {label: 'Updates', to: '/blog'},
            {label: 'Rules', to: '/docs/ip'},
            {label: 'Vote', to: '/community'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Borderra`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
