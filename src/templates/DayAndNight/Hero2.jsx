import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { IoMoon, IoSunny } from "react-icons/io5";

import heroVideo from "../../assets/videos/hero.mp4";

import "./Hero2.scss";

function Hero2({ invitation }) {
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
        <span className="hero2__subtitle">WE ARE GETTING MARRIED</span>

        <h1>
          {invitation.groom}
          <span>&</span>
          {invitation.bride}
        </h1>

        <p>{invitation.date}</p>
      </motion.div>
    </section>
  );
}

export default Hero2;
