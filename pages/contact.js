import styles from '../styles/Contact.module.css';
import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Mon Portfolio</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Me Contacter</h1>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" className={styles.input} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className={styles.input} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" className={styles.textarea} required />
          </div>
          <button type="submit" className={styles.button}>
            Envoyer
          </button>
        </form>
      </div>
    </>
  );
}
