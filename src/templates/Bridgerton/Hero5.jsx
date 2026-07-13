import { motion } from "framer-motion";
import "./Hero5.scss";

import heroVideo from "../../assets/videos/hero5.mp4";

function Hero5({ invitation }) {
  const eventDate = new Date(invitation.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="hero5">
      <video className="hero5__video" autoPlay muted loop playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="hero5__overlay" />

      <motion.div
        className="hero5__content"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.3,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.span
          className="hero5__subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          THE WEDDING OF
        </motion.span>

        <motion.h1
          className="hero5__names"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <span>{invitation.bride}</span>

          <small>&</small>

          <span>{invitation.groom}</span>
        </motion.h1>

        <motion.div
          className="hero5__date"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95 }}
        >
          {eventDate.toUpperCase()}
        </motion.div>

        <motion.div
          className="hero5__venue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15 }}
        >
          <p>{invitation.venue}</p>

          <span>{invitation.address}</span>
        </motion.div>

        <motion.a
          href="#countdown"
          className="hero5__scroll"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        >
          ↓
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Hero5;
