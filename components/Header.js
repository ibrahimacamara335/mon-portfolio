// components/Header.js
import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">Accueil</Link>
        <Link href="/a-propos">À propos</Link>
        <Link href="/competences">Compétences</Link>
        <Link href="/projets">Projets</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
