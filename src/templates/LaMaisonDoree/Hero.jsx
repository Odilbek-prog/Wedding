import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import "./Hero.scss";

function Hero({ invitation }) {
  const { t, i18n } = useTranslation();

  const weddingDate = new Date(invitation.date);

  const month = t(`months.${weddingDate.getMonth()}`);
  const weekday = t(`weekdays.${weddingDate.getDay()}`);
  const day = weddingDate.getDate();
  const year = weddingDate.getFullYear();

  const scrollNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <motion.section
      className="hero"
      initial={{
        opacity: 0,
        scale: 1.12,
        filter: "blur(15px)",
      }}
      animate={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        className="hero__bg"
        animate={{
          scale: [1.08, 1.13, 1.08],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="hero__bg"
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="hero__names"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {invitation.groom}

          <span>&</span>

          {invitation.bride}
        </motion.h1>

        <motion.span
          className="hero__invite"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          {t("hero.invite")}
        </motion.span>

        <div className="hero__dateCard">
          <div className="hero__month">{month.toUpperCase()}</div>

          <div className="hero__middle">
            <h1 className="hero__day">{day}</h1>

            <span className="hero__weekday">{weekday.toUpperCase()}</span>
          </div>

          <div className="hero__year">{year}</div>
        </div>

        <div className="hero__location">
          <span className="hero__locationtext">{t("hero.locationtext")}</span>
          <h1 className="hero__address">{invitation.venue}</h1>
          <span className="hero__locationtext">{invitation.time}</span>
        </div>

        <motion.div
          className="hero__scroll"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.7,
            repeat: Infinity,
          }}
          onClick={scrollNext}
        >
          <FaChevronDown />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
