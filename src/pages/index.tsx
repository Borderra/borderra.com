import {useState} from 'react';
import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const serverIp = 'join.borderra.com';
const heroImageSrc = '/img/borderra-hero.avif';
const heroImageSrcSet =
  '/img/borderra-hero-960.avif 960w, /img/borderra-hero-1440.avif 1440w, /img/borderra-hero.avif 1920w';

const entryLinks = [
  {
    eyebrow: 'Start',
    title: 'Guide',
    text: 'Join the server and settle in.',
    to: '/docs/ip',
  },
  {
    eyebrow: 'World',
    title: 'Map',
    text: 'See towns, borders, and claims.',
    href: 'https://map.borderra.com',
  },
  {
    eyebrow: 'Players',
    title: 'Discord',
    text: 'Recruitment, support, and news.',
    href: 'https://discord.gg/EhuM7BaJ68',
  },
];

function CopyIpButton() {
  const [copied, setCopied] = useState(false);

  async function copyIp() {
    try {
      await navigator.clipboard.writeText(serverIp);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button className={styles.ipButton} onClick={copyIp} type="button">
      <span>{copied ? 'Copied' : serverIp}</span>
    </button>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Borderra"
      description="Borderra is a geopolitical Minecraft server built around towns, nations, player-made territory, Towny, QuickShop, mcMMO, and custom-developed gameplay systems.">
      <Head>
        <link
          rel="preload"
          as="image"
          href={heroImageSrc}
          type="image/avif"
          imageSrcSet={heroImageSrcSet}
          imageSizes="100vw"
        />
      </Head>
      <main className={styles.home}>
        <section className={styles.hero}>
          <img
            className={styles.heroImage}
            src={heroImageSrc}
            srcSet={heroImageSrcSet}
            sizes="100vw"
            width={1920}
            height={1080}
            alt="Satellite-style map of Borderra's Minecraft world continents"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <div className={styles.heroVeil} aria-hidden="true" />
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>Geopolitical Minecraft</p>
            <h1>Borderra</h1>
            <p className={styles.lede}>Towns, nations, player-made borders, and a focused plugin stack.</p>
            <div className={styles.actions}>
              <CopyIpButton />
              <Link className={styles.discordButton} href="https://discord.gg/EhuM7BaJ68">
                Discord
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.entryGrid} aria-label="Borderra entry points">
          {entryLinks.map((entry) => (
            <Link className={styles.entryCard} href={entry.href} to={entry.to} key={entry.title}>
              <span>{entry.eyebrow}</span>
              <strong>{entry.title}</strong>
              <p>{entry.text}</p>
            </Link>
          ))}
        </section>
      </main>
    </Layout>
  );
}
