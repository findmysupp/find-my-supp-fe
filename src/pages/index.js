import Link from "next/link";
import Head from "next/head";
import styles from "../styles/ComingSoon.module.css"; // Import the CSS file

export default function ComingSoon() {
  return (
    <div>

      <Head>
        <title>Find My Supp - Coming Soon</title>
        <meta name="description" content="Find My Supp - Coming Soon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       {/* Banner Section */}
       <header className={styles.banner}>
          <h1 className={styles.title}>Find My Supp</h1>
          <p className={styles.subtitle}>The ultimate tool for finding your supplements. Launching soon!</p>
        </header>
      <div className={styles.container}>

       

        {/* About Us Section */}
        <section className={styles.section}>
          <h2>About Us</h2>
          <p>
            Find My Supp is a hybrid B2B and B2C web application that provides consumers with personalized current in-the-market supplement recommendations based on health data, through an AI-augmented recommendation engine.
          </p>
        </section>

        {/* Vision Section */}
        <section className={styles.section}>
          <h2>Our Vision</h2>
          <ul>
            <li>To educate and inform end-users on their dietary and nutrition status in an easy-to-understand manner and optimise micronutrient intake for holistic well-being and disease prevention</li>
            <li>To become the Singaporean leader in the personalised supplement space</li>
            <li>Long term vision is to pivot into health metrics and personalised health recommendations for all domains of health, not just supplements, but also screening modalities, and personalised treatment plans for chronic conditions, that are validated by current evidence</li>
          </ul>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <p>Stay tuned! Follow us for updates:</p>
          {/* <div className={styles.socialIcons}>
          <Link href="https://twitter.com">
            <a target="_blank" aria-label="Twitter">
              🐦
            </a>
          </Link>
          <Link href="https://facebook.com">
            <a target="_blank" aria-label="Facebook">
              📘
            </a>
          </Link>
          <Link href="https://instagram.com">
            <a target="_blank" aria-label="Instagram">
              📸
            </a>
          </Link>
        </div> */}
        </footer>
      </div>
    </div>
  );
}
