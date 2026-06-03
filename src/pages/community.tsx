import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './page.module.css';

export default function Community(): ReactNode {
  return (
    <Layout title="Community" description="Borderra community hub for Discord, voting, projects, and public resources.">
      <header className={styles.pageHero}>
        <div className={styles.pageHeroInner}>
          <span className={styles.label}>Community hub</span>
          <h1>The public square for every town</h1>
          <p>Players need obvious paths to Discord, voting, public projects, and support. This page keeps those routes visible without burying them inside docs.</p>
          <div className={styles.actionRow}>
            <Link className={styles.button} href="https://discord.gg/borderra">Join Discord</Link>
            <Link className={styles.ghostButton} to="/blog">Read updates</Link>
          </div>
        </div>
      </header>
      <main className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.grid}>
            <article className={styles.card}>
              <h2>Discord</h2>
              <p>Town recruitment, staff announcements, diplomacy, support, and event notices belong in one active place.</p>
            </article>
            <article className={styles.card}>
              <h2>Projects</h2>
              <p>Feature community maps, public railways, market districts, diplomatic archives, and player-written guides.</p>
            </article>
            <article className={styles.card} id="vote">
              <h2>Vote</h2>
              <p>Add vote links here when they exist. The homepage footer already routes players to this anchor.</p>
            </article>
          </div>
          <article className={styles.wideCard}>
            <h2>Community structure</h2>
            <p>Community links are separated from mechanic documentation so new players do not confuse social spaces with instructions. Mechanics live in docs; live conversation lives here.</p>
          </article>
        </div>
      </main>
    </Layout>
  );
}
