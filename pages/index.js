import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { FaMusic, FaTshirt, FaInfo, FaPodcast  } from "react-icons/fa";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Ayden Jackson</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Amazing <br></br> <span className="outline">Country</span> <br></br> Music
        </h1>

        <p className={styles.description}>
        Ayden Jackson is an upcoming artist in the country music industry.
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3><FaMusic /> Music &rarr;</h3>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3><FaTshirt /> Merchandise &rarr;</h3>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3><FaInfo /> About &rarr;</h3>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3><FaPodcast /> Podcast &rarr;</h3>
          </a>
        </div>
      </main>
    </div>
  );
}
