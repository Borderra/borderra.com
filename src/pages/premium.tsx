import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './page.module.css';

export default function Premium(): ReactNode {
  return (
    <Layout title="Premium" description="Borderra premium support page focused on cosmetics and quality-of-life perks.">
      <header className={styles.pageHero}>
        <div className={styles.pageHeroInner}>
          <span className={styles.label}>Support the server</span>
          <h1>Premium without breaking the world</h1>
          <p>Premium should feel valuable without turning territory, combat, or economics into a pay-to-win shortcut.</p>
        </div>
      </header>
      <main className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.grid}>
            <article className={styles.pricingCard}>
              <span className={styles.label}>Borderra Premium</span>
              <span className={styles.price}>$8</span>
              <p>Monthly supporter package placeholder.</p>
              <Link className={styles.button} href="https://store.borderra.com">Open store</Link>
            </article>
            <article className={styles.card}>
              <h2>Cosmetics</h2>
              <ul>
                <li>Name styling</li>
                <li>Profile badges</li>
              </ul>
            </article>
            <article className={styles.card}>
              <h2>Convenience</h2>
              <ul>
                <li>Extra saved map pins</li>
                <li>Queue priority</li>
                <li>Supporter Discord role</li>
              </ul>
            </article>
          </div>
          <article className={styles.wideCard}>
            <h2>Premium rule</h2>
            <p>Keep claims, combat power, and direct currency generation out of paid perks. A geopolitical server depends on player trust in the map.</p>
          </article>
        </div>
      </main>
    </Layout>
  );
}
