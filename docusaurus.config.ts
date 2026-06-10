import fs from 'node:fs';
import path from 'node:path';
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config, Plugin} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

function getHtmlFiles(directory: string): string[] {
  return fs.readdirSync(directory, {withFileTypes: true}).flatMap((entry) => {
    const filePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      return getHtmlFiles(filePath);
    }

    return entry.isFile() && entry.name.endsWith('.html') ? [filePath] : [];
  });
}

function borderraFontPreloadPlugin(): Plugin<unknown> {
  return {
    name: 'borderra-font-preloads',
    postBuild({outDir}) {
      const cssDirectory = path.join(outDir, 'assets', 'css');

      if (!fs.existsSync(cssDirectory)) {
        return;
      }

      const fontUrls = new Set<string>();
      const fontUrlPattern = /url\(["']?(\/assets\/fonts\/[^"')]+\.woff2)["']?\)/g;

      for (const fileName of fs.readdirSync(cssDirectory)) {
        if (!fileName.endsWith('.css')) {
          continue;
        }

        const css = fs.readFileSync(path.join(cssDirectory, fileName), 'utf8');

        for (const match of css.matchAll(fontUrlPattern)) {
          fontUrls.add(match[1]);
        }
      }

      const orderedFontUrls = [...fontUrls].sort((left, right) => {
        const rank = (url: string) => (url.includes('minecraftten') ? 0 : 1);
        return rank(left) - rank(right) || left.localeCompare(right);
      });

      if (orderedFontUrls.length === 0) {
        return;
      }

      const preloadTags = orderedFontUrls
        .map((url) => `<link rel="preload" as="font" href="${url}" type="font/woff2" crossorigin="anonymous" />`)
        .join('');

      for (const htmlFile of getHtmlFiles(outDir)) {
        const html = fs.readFileSync(htmlFile, 'utf8');

        if (orderedFontUrls.every((url) => html.includes(url))) {
          continue;
        }

        const imagePreloadPattern = /(<link data-rh=true rel=preload as=image[^>]+fetchpriority=high \/>)/;
        const nextHtml = imagePreloadPattern.test(html)
          ? html.replace(imagePreloadPattern, `$1${preloadTags}`)
          : html.replace('<link rel=stylesheet', `${preloadTags}<link rel=stylesheet`);

        fs.writeFileSync(htmlFile, nextHtml);
      }
    },
  };
}

const config: Config = {
  title: 'Borderra',
  tagline: 'Towns. Nations. Territory.',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://borderra.com',
  baseUrl: '/',
  baseUrlIssueBanner: false,
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

  plugins: [borderraFontPreloadPlugin],

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
        width: 64,
        height: 64,
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
