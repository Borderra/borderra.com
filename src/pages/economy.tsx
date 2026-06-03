import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './page.module.css';

export default function Economy(): ReactNode {
  return (
    <Layout title="Economy" description="Borderra economy overview for gold, shops, contracts, scarcity, and trade routes.">
      <header className={styles.pageHero}>
        <div className={styles.pageHeroInner}>
          <span className={styles.label}>Player economy</span>
          <h1>Gold, routes, shops, and leverage</h1>
          <p>The economy page explains the trade loop at a marketing level, while detailed commands and edge cases stay in docs.</p>
          <div className={styles.actionRow}>
            <Link className={styles.button} to="/docs">Guide hub</Link>
            <Link className={styles.ghostButton} to="/docs/rules">Server rules</Link>
          </div>
        </div>
      </header>
      <main className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.grid}>
            <article className={styles.card}>
              <h2>Currency</h2>
              <p>Use a simple gold-backed economy so new players understand value without reading a spreadsheet first.</p>
            </article>
            <article className={styles.card}>
              <h2>Markets</h2>
              <p>Public shops turn towns into destinations and give nations a reason to protect logistics.</p>
            </article>
            <article className={styles.card}>
              <h2>Scarcity</h2>
              <p>Regional materials, travel time, and secure storage create reasons to specialize and negotiate.</p>
            </article>
          </div>
          <article className={styles.wideCard}>
            <h2>Designed as a loop</h2>
            <p>Mine or produce goods, move them through risky routes, sell in public markets, then reinvest into towns and national infrastructure. That loop is what the homepage and docs keep pointing toward.</p>
          </article>
        </div>
      </main>
    </Layout>
  );
}
