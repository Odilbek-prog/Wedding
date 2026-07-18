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
  const [loading, setLoading] = useState(true);

  const weddingDate = new Date(invitation.date);

  const month = t(`months.${weddingDate.getMonth()}`);
  const day = weddingDate.getDate();
  const year = weddingDate.getFullYear();

  useEffect(() => {
    const video = videoRef.current;

    const handleEnd = () => {
      setDayMode(true);
    };

    video.addEventListener("ended", handleEnd);

    return () => {
      video.removeEventListener("ended", handleEnd);
    };
  }, []);

  const handleVideoLoaded = async () => {
    const video = videoRef.current;

    try {
      await video.play();
    } catch (e) {
      console.log(e);
    }

    setLoading(false);
  };

  const changeTheme = async () => {
    const video = videoRef.current;

    if (!video) return;

    if (dayMode) {
      video.pause();
      video.currentTime = 0;
      setDayMode(false);
      return;
    }

    video.currentTime = 0;

    try {
      await video.play();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="hero2">
      {loading && (
        <div className="hero2__loader">
          <div className="hero2__spinner"></div>
        </div>
      )}

      <video
        ref={videoRef}
        className="hero2__video"
        muted
        playsInline
        preload="auto"
        onLoadedData={handleVideoLoaded}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {!loading && (
        <>
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

            <p>
              {month} {day}, {year}
            </p>
          </motion.div>
        </>
      )}
    </section>
  );
}

export default Hero2;
