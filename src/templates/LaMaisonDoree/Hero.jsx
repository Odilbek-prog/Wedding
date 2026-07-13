import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import topFlower from "../../assets/images/flower-top.png";
import bottomFlower from "../../assets/images/flower-bottom.png";

import "./Hero.scss";

function Hero({ invitation }) {
  const { t, i18n } = useTranslation();

  const locale = i18n.language === "ru" ? "ru-RU" : "uz-UZ";

  const weddingDate = new Date(invitation.date);

  const month = weddingDate.toLocaleDateString(locale, {
    month: "long",
  });

  const day = weddingDate.toLocaleDateString(locale, {
    day: "numeric",
  });

  const year = weddingDate.toLocaleDateString(locale, {
    year: "numeric",
  });

  const weekday = weddingDate.toLocaleDateString(locale, {
    weekday: "long",
  });

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

      <motion.img
        src={topFlower}
        className="hero__flower hero__flower--top"
        animate={{
          rotate: [0, 2, 0, -2, 0],
          y: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <motion.img
        src={bottomFlower}
        className="hero__flower hero__flower--bottom"
        animate={{
          rotate: [180, 182, 180, 178, 180],
          y: [0, 5, 0],
        }}
        transition={{
          duration: 8,
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
        <motion.span
          className="hero__invite"
          initial={{ opacity: 0, letterSpacing: 15 }}
          animate={{ opacity: 1, letterSpacing: 6 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          {t("hero.invite")}
        </motion.span>

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

        <div className="hero__dateCard">
          <div className="hero__month">{month.toUpperCase()}</div>

          <div className="hero__middle">
            <span className="hero__day">{day}</span>

            <span className="hero__year">{year}</span>
          </div>

          <div className="hero__weekday">{weekday.toUpperCase()}</div>
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
