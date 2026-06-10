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

function buildCriticalCss(fontUrls: string[]): string {
  const titleFontUrl = fontUrls.find((url) => url.includes('minecraftten'));
  const uiFontUrl = fontUrls.find((url) => url.includes('minecraft-'));
  const fontFaces = [
    titleFontUrl
      ? `@font-face{font-display:swap;font-family:"Minecraft Ten";font-style:normal;font-weight:400;src:url(${titleFontUrl}) format("woff2")}`
      : '',
    uiFontUrl
      ? `@font-face{font-display:optional;font-family:"Minecraft";font-style:normal;font-weight:400;src:url(${uiFontUrl}) format("woff2")}`
      : '',
  ].join('');

  return `${fontFaces}:root{--borderra-bg:#05070a;--borderra-text:#f4f6f8;--borderra-soft:#c8d5e4;--borderra-title-font:"Minecraft Ten","Arial Narrow",Arial,sans-serif;--borderra-ui-font:"Minecraft",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--ifm-navbar-height:4rem}*{box-sizing:border-box}html,body{background:#05070a;color:#f4f6f8;margin:0}html{font:100%/1.65 var(--borderra-ui-font);-webkit-font-smoothing:antialiased;text-rendering:optimizelegibility;text-size-adjust:100%}body{word-wrap:break-word}a{color:inherit;text-decoration:none}.navbar{align-items:center;background:rgba(5,7,10,.94);border-bottom:1px solid rgba(244,246,248,.1);box-shadow:none;display:flex;height:var(--ifm-navbar-height);padding:0 1rem;position:sticky;top:0;z-index:200}.navbar__inner{align-items:center;display:flex;margin:0 auto;max-width:1240px;width:100%}.navbar__items{align-items:center;display:flex;min-width:0}.navbar__items--right{margin-left:auto}.navbar__brand{align-items:center;color:#f4f6f8;display:flex;margin-right:1rem;min-width:0}.navbar__logo{height:2.1rem;margin-right:.5rem}.navbar__logo img{display:block;height:2.1rem;width:auto}.navbar__title{display:none}.navbar__link{color:rgba(244,246,248,.82);font-size:.94rem;font-weight:900;letter-spacing:.03em;padding:.25rem .75rem;text-transform:uppercase}.menuJoinButton{border:1px solid rgba(244,246,248,.72);border-radius:999px;color:#f4f6f8!important;font-weight:900;margin-left:.75rem;padding:.52rem .95rem;text-transform:uppercase}.navbar__toggle{background:transparent;border:0;color:#f4f6f8;display:none;margin-right:.5rem;padding:.25rem}[class^=home_]{background:#05070a;color:#f4f6f8;min-height:100vh}[class^=hero_]{isolation:isolate;min-height:calc(100vh - var(--ifm-navbar-height));overflow:hidden;position:relative}[class^=heroImage_],[class^=heroVeil_]{inset:0;position:absolute}[class^=heroImage_]{filter:saturate(.78) contrast(1.05) brightness(.78);height:100%;object-fit:cover;object-position:center 36%;pointer-events:none;transform:scale(1.02);width:100%;z-index:-3}[class^=heroVeil_]{background:linear-gradient(90deg,rgba(4,6,10,.94),rgba(4,6,10,.72) 36%,rgba(4,6,10,.22) 76%),linear-gradient(0deg,rgba(4,6,10,.88),transparent 34%),radial-gradient(circle at 72% 24%,rgba(187,210,236,.14),transparent 34rem);z-index:-2}[class^=heroInner_]{display:flex;flex-direction:column;justify-content:center;margin:0 auto;max-width:1240px;min-height:calc(100vh - var(--ifm-navbar-height));padding:clamp(6rem,10vw,9rem) clamp(1.2rem,5vw,4rem) 7rem}[class^=eyebrow_]{color:#c8d5e4;font-size:.82rem;font-weight:900;letter-spacing:.2em;margin:0 0 .8rem;text-transform:uppercase}[class^=hero_] h1{color:#f7f8fb;font-family:var(--borderra-title-font);font-size:clamp(4.6rem,12vw,10.8rem);font-weight:400;letter-spacing:.04em;line-height:.94;margin:0;text-transform:uppercase}[class^=lede_]{color:rgba(242,245,248,.84);font-size:clamp(1.2rem,2.2vw,1.65rem);line-height:1.45;margin:1.3rem 0 0;max-width:560px}[class^=actions_]{display:flex;flex-wrap:wrap;gap:.75rem;margin-top:2rem}[class^=ipButton_],[class^=discordButton_]{align-items:center;border-radius:999px;display:inline-flex;font-weight:900;justify-content:center;letter-spacing:.04em;min-height:3.2rem;padding:.85rem 1.18rem;text-transform:uppercase}[class^=ipButton_]{background:#f4f6f8;border:1px solid rgba(255,255,255,.8);color:#080b0f;cursor:pointer;min-width:12.35rem}[class^=discordButton_]{backdrop-filter:blur(12px);background:rgba(7,10,15,.42);border:1px solid rgba(244,246,248,.28);color:#f4f6f8}[class^=entryGrid_]{background:#05070a;display:grid;gap:1px;grid-template-columns:repeat(3,minmax(0,1fr));min-height:38vh}[class^=entryCard_]{background:radial-gradient(circle at 20% 0%,rgba(143,231,255,.14),transparent 18rem),linear-gradient(145deg,rgba(16,22,32,.96),rgba(5,7,10,.98));border-top:1px solid rgba(244,246,248,.1);color:#f4f6f8;display:flex;flex-direction:column;justify-content:flex-end;min-height:26rem;overflow:hidden;padding:clamp(1.4rem,3vw,2.1rem);position:relative}[class^=entryCard_] span{color:rgba(244,246,248,.66);font-size:.78rem;font-weight:900;letter-spacing:.18em;text-transform:uppercase}[class^=entryCard_] strong{display:block;font-family:var(--borderra-title-font);font-size:clamp(2.4rem,4.8vw,4.4rem);font-weight:400;letter-spacing:.04em;line-height:1;margin-top:.35rem;text-transform:uppercase}[class^=entryCard_] p{color:rgba(244,246,248,.76);font-size:1rem;line-height:1.45;margin:.7rem 0 0;max-width:24rem}@media (max-width:996px){.navbar__toggle{display:block}.navbar__item:not(.menuJoinButton){display:none}[class^=heroVeil_]{background:linear-gradient(180deg,rgba(4,6,10,.84),rgba(4,6,10,.46) 48%,rgba(4,6,10,.9)),radial-gradient(circle at 70% 20%,rgba(187,210,236,.14),transparent 24rem)}[class^=heroInner_]{justify-content:flex-end;padding-bottom:8.5rem}[class^=entryGrid_]{grid-template-columns:1fr}[class^=entryCard_]{min-height:18rem}}@media (max-width:560px){[class^=hero_] h1{font-size:clamp(3.3rem,17vw,5.6rem)}[class^=actions_]{align-items:stretch;flex-direction:column;max-width:22rem}}`;
}

function borderraPerformancePlugin(): Plugin<unknown> {
  return {
    name: 'borderra-performance',
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
      const criticalStyle = `<style id="borderra-critical-css">${buildCriticalCss(orderedFontUrls)}</style>`;
      const homePage = path.join(outDir, 'index.html');
      const stylesheetPattern = /<link rel=stylesheet href=(\/assets\/css\/[^ >]+\.css) \/>/;

      for (const htmlFile of getHtmlFiles(outDir)) {
        const html = fs.readFileSync(htmlFile, 'utf8');
        let nextHtml = html;

        if (!orderedFontUrls.every((url) => nextHtml.includes(url))) {
          const imagePreloadPattern = /(<link data-rh=true rel=preload as=image[^>]+fetchpriority=high \/>)/;
          nextHtml = imagePreloadPattern.test(nextHtml)
            ? nextHtml.replace(imagePreloadPattern, `$1${preloadTags}`)
            : nextHtml.replace('<link rel=stylesheet', `${preloadTags}<link rel=stylesheet`);
        }

        if (path.resolve(htmlFile) === path.resolve(homePage) && stylesheetPattern.test(nextHtml)) {
          nextHtml = nextHtml.replace(stylesheetPattern, (_match, stylesheetUrl: string) => {
            return `${criticalStyle}<link rel="preload" href="${stylesheetUrl}" as="style" onload="this.onload=null;this.rel='stylesheet'" /><noscript><link rel="stylesheet" href="${stylesheetUrl}" /></noscript>`;
          });
        }

        if (nextHtml !== html) {
          fs.writeFileSync(htmlFile, nextHtml);
        }
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

  plugins: [borderraPerformancePlugin],

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
