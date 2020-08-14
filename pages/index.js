import Head from "next/head";
import styles from "../styles/Home.module.css";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Charli Leger</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1>Charli Leger</h1>
        <em>Customer Retention & Project Management</em>
      </header>

      <main className={styles.main}>
        <Intro />
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          Made with
          <span role="img" aria-label="love">
            💛
          </span>{" "}
          by:
          <a
            href="https://github.com/kel7774"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kelli Landry
          </a>
        </div>
      </footer>
    </div>
  );
}
