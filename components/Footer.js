import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Ibrahima Camara. Tous droits réservés.</p>
    </footer>
  );
}
