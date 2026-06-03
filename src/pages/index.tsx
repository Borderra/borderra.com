import {useState} from 'react';
import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const serverIp = 'join.borderra.com';

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
    href: 'https://discord.gg/borderra',
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
      description="Borderra is a geopolitical Minecraft server built around towns, nations, and player-made territory.">
      <main className={styles.home}>
        <section className={styles.hero}>
          <div className={styles.heroImage} aria-hidden="true" />
          <div className={styles.heroVeil} aria-hidden="true" />
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>Geopolitical Minecraft</p>
            <h1>Borderra</h1>
            <p className={styles.lede}>Towns, nations, and player-made borders on a shared world.</p>
            <div className={styles.actions}>
              <CopyIpButton />
              <Link className={styles.discordButton} href="https://discord.gg/borderra">
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
