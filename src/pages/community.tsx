import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './page.module.css';

export default function Community(): ReactNode {
  return (
    <Layout title="Community" description="Join Borderra's Discord, find towns, follow updates, and get involved with the server community.">
      <header className={styles.pageHero}>
        <div className={styles.pageHeroInner}>
          <span className={styles.label}>Community hub</span>
          <h1>Find your people before you pick your borders</h1>
          <p>Borderra is built around towns, nations, trade, and diplomacy. The community hub is where players recruit, make deals, follow updates, and turn map claims into real stories.</p>
          <div className={styles.actionRow}>
            <Link className={styles.button} href="https://discord.gg/EhuM7BaJ68">Join Discord</Link>
            <Link className={styles.ghostButton} to="/blog">Read updates</Link>
          </div>
        </div>
      </header>
      <main className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.grid}>
            <article className={styles.card}>
              <h2>Discord</h2>
              <p>Join the Discord for town recruitment, nation diplomacy, staff announcements, support, and server news.</p>
            </article>
            <article className={styles.card}>
              <h2>Find a town</h2>
              <p>New players can meet mayors, compare nations, ask where help is needed, and find a settlement before walking across the map alone.</p>
            </article>
            <article className={styles.card} id="vote">
              <h2>Community projects</h2>
              <p>Roads, ports, markets, public farms, guides, and diplomatic records all work better when players coordinate outside their own claims.</p>
            </article>
          </div>
          <article className={styles.wideCard}>
            <h2>Why it matters</h2>
            <p>A geopolitical server is only interesting when players talk to each other. Strong towns recruit clearly, nations explain what they stand for, traders advertise useful routes, and disputes get settled before they turn into map-wide problems.</p>
          </article>
        </div>
      </main>
    </Layout>
  );
}
