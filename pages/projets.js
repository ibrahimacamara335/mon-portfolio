import styles from '../styles/Projets.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Projets({ projets = [] }) {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className={styles.title}>Mes Projets</h2>

      <div className={styles.grid}>
        {projets.map((projet, index) => (
          <motion.div
            key={index}
            className={styles.card}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={projet.image}
                alt={projet.titre}
                width={400}
                height={200}
                className={styles.image}
              />
            </div>
            <h3>{projet.titre}</h3>
            <p>{projet.description}</p>
            <div className={styles.links}>
              {projet.lien && (
                <a href={projet.lien} target="_blank" rel="noopener noreferrer">
                  🔗 Voir
                </a>
              )}
              {projet.github && (
                <a href={projet.github} target="_blank" rel="noopener noreferrer">
                  💻 GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}



export async function getServerSideProps() {
  // Simule une récupération depuis un backend ou une base de données
  const projets = [
    {
      titre: "Portfolio",
      description: "Site personnel pour présenter mes projets, compétences et expériences.",
      image: "/portofolio.png",
      lien: "https://monportfolio.com",
      github: "https://github.com/monrepo/portfolio"
    },
    {
      titre: "Todo App",
      description: "Une application de gestion de tâches moderne avec React et Firebase.",
      image: "/todoApp.png",
      lien: "https://todoapp.com",
      github: "https://github.com/monrepo/todo-app"
    },
    {
      titre: "Blog Dev",
      description: "Blog technique pour partager des tutos sur React, JS, Next.js...",
      image: "/dev.png",
      lien: "https://blogdev.com",
      github: "https://github.com/monrepo/blog-dev"
    }
  ];

  return {
    props: {
      projets,
    },
  };
}
