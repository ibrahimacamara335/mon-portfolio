import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Mon Nom. Tous droits réservés.</p>
    </footer>
  );
}
