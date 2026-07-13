import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import "./Hero4.scss";

import heroVideo from "../../assets/videos/hero4.mp4";

function Hero4({ invitation }) {
  const { t, i18n } = useTranslation();

  const locale = i18n.language === "ru" ? "ru-RU" : "uz-UZ";

  const eventDate = new Date(invitation.date).toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="hero4">
      <video className="hero4__video" autoPlay muted loop playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="hero4__overlay" />

      <motion.div
        className="hero4__content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
      >
        <motion.p
          className="hero4__top"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {t("hero4.top")}
        </motion.p>

        <motion.h1
          className="hero4__names"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.9 }}
        >
          <span>{invitation.groom}</span>

          <small>&</small>

          <span>{invitation.bride}</span>
        </motion.h1>

        <motion.div
          className="hero4__date"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {eventDate}
        </motion.div>

        <motion.a
          href="#countdown"
          className="hero4__rsvp"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          {t("hero4.button")}
        </motion.a>

        <motion.div
          className="hero4__scroll"
          animate={{
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero4;
