import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { IoMoon, IoSunny } from "react-icons/io5";
import { useTranslation } from "react-i18next";

import heroVideo from "../../assets/videos/hero.mp4";

import "./Hero2.scss";

function Hero2({ invitation }) {
  const { t, i18n } = useTranslation();

  const videoRef = useRef(null);

  const [dayMode, setDayMode] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    video.play();

    const handleEnd = () => {
      setDayMode(true);
    };

    video.addEventListener("ended", handleEnd);

    return () => {
      video.removeEventListener("ended", handleEnd);
    };
  }, []);

  const changeTheme = async () => {
    const video = videoRef.current;

    if (dayMode) {
      video.pause();
      video.currentTime = 0;

      setDayMode(false);

      return;
    }

    video.currentTime = 0;

    await video.play();
  };

  const locale = i18n.language === "ru" ? "ru-RU" : "uz-UZ";

  const eventDate = new Date(invitation.date).toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="hero2">
      <video ref={videoRef} className="hero2__video" muted playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="hero2__overlay" />

      <button className="hero2__theme" onClick={changeTheme}>
        {dayMode ? <IoSunny /> : <IoMoon />}
      </button>

      <motion.div
        className="hero2__content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="hero2__subtitle">{t("hero2.subtitle")}</span>

        <h1>
          {invitation.groom}
          <span>&</span>
          {invitation.bride}
        </h1>

        <p>{eventDate}</p>
      </motion.div>
    </section>
  );
}

export default Hero2;
