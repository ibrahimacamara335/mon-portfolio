import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Accueil | Mon Portfolio</title>
      </Head>

      

      <div className={styles.hero}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Bienvenue sur mon portfolio !
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Développeur passionné, créatif et toujours curieux.
        </motion.p>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Link href="/projets">
            <button className={styles.button}>Voir mes projets</button>
          </Link>
        </motion.div>

        <motion.div
          className={styles.imageWrapper}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Image src="/photo.jpg" alt="Profil" width={180} height={180} className={styles.image} />
        </motion.div>
      </div>


     
    </>
  );
}
