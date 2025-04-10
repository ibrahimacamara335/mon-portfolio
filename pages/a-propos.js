import Image from 'next/image';
import styles from '../styles/Apropos.module.css';
import { motion } from 'framer-motion';

export default function APropos() {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        À propos de moi
      </motion.h2>

      <motion.div
        className={styles.profileSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className={styles.imageWrapper}>
        <Image src="/photo.jpg" alt="Ma photo de profil" width={200} height={200} />

            className={styles.profileImage}
        </div>

        <div className={styles.bio}>
          <p>
            Salut 👋 Je suis <strong>Ibrahima Camara</strong>, un développeur web passionné par la création
            d’expériences interactives et performantes à l’aide de <strong>React</strong>, <strong>Next.js</strong> et d’outils modernes.
          </p>
        </div>
      </motion.div>

      <motion.div
        className={styles.skills}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <h3>Mes compétences</h3>
        <div className={styles.skillsGrid}>
          {["HTML", "CSS", "React", "Next.js", "Git", "Responsive"].map((skill, index) => (
            <motion.div
              key={skill}
              className={styles.skillCard}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              {skill === "HTML" && "💻"} 
              {skill === "CSS" && "🎨"} 
              {skill === "React" && "⚛️"} 
              {skill === "Next.js" && "🚀"} 
              {skill === "Git" && "🛠"} 
              {skill === "Responsive" && "📱"} {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.a
        href="CV_2025-04-08_Ibrahima_CAMARA.pdf"
        download
        className={styles.cvButton}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        📄 Télécharger mon CV
      </motion.a>
    </motion.div>
  );
}
