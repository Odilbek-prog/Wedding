import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import "./Hero3.scss";

import heroVideo from "../../assets/videos/hero3.mp4";

function Hero3({ invitation }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;

    videoRef.current.currentTime = 0;

    videoRef.current.play().catch(() => {});
  }, []);

  return (
    <section className="hero3">
      <video
        ref={videoRef}
        className="hero3__video"
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="hero3__overlay" />

      <motion.div
        className="hero3__content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 5 }}
      >
        <svg
          viewBox="-20 -160 440 380"
          className="hero3__curve"
          aria-label="We're getting married"
        >
          <defs>
            <path
              id="hero-arch-mobile"
              d="M 20,200 Q 200,-360 380,200"
              fill="none"
            ></path>
          </defs>
          <text
            className="fill-foreground font-body font-semibold"
            textAnchor="middle"
          >
            <textPath href="#hero-arch-mobile" startOffset="50%">
              WE'RE GETTING MARRIED
            </textPath>
          </text>
        </svg>

        <motion.h1
          className="hero3__names"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 5,
          }}
        >
          {invitation.bride}

          <span>&</span>

          {invitation.groom}
        </motion.h1>

        <motion.p
          className="hero3__date"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 5,
          }}
        >
          {invitation.date}
        </motion.p>
      </motion.div>
    </section>
  );
}

export default Hero3;
