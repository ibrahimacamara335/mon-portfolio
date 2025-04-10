// pages/competences.js
import styles from '../styles/Competences.module.css';
import { motion } from 'framer-motion';
import { FaCode, FaTools, FaLaptopCode } from 'react-icons/fa';

const competences = [
  {
    categorie: 'Langages',
    icone: <FaCode size={30} />,
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
  },
  {
    categorie: 'Frameworks',
    icone: <FaLaptopCode size={30} />,
    items: ['React', 'Next.js', 'Node.js'],
  },
  {
    categorie: 'Outils',
    icone: <FaTools size={30} />,
    items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman'],
  },
];

export default function Competences() {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className={styles.title}>💼 Mes Compétences</h2>

      <div className={styles.grid}>
        {competences.map((section, index) => (
          <motion.div
            key={index}
            className={styles.card}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {section.icone}
              <h3>{section.categorie}</h3>
            </div>
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx}>✅ {item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
