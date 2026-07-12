import { useRef, useState } from "react";
import { motion } from "framer-motion";
import "./IntroVideo.scss";
import poster from "../../assets/images/poster.png";
import introVideo from "../../assets/videos/intro.mp4";

function IntroVideo({ onFinish, preview }) {
  const videoRef = useRef(null);

  const [started, setStarted] = useState(false);

  const startVideo = async () => {
    if (started) return;

    setStarted(true);

    await videoRef.current.play();
  };

  return (
    <motion.section
      className={`intro-video ${preview ? "intro-video--preview" : ""}`}
      onClick={startVideo}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <video ref={videoRef} poster={poster} playsInline onEnded={onFinish}>
        <source src={introVideo} type="video/mp4" />
      </video>

      {!started && (
        <motion.div
          className="intro-video__tap"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        >
          Tap Anywhere
        </motion.div>
      )}
    </motion.section>
  );
}

export default IntroVideo;
