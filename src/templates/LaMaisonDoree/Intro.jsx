import { motion } from "framer-motion";
import "./Intro.scss";

function Intro({ invitation, opened, onOpen, preview }) {
  return (
    <motion.section
      className={`intro ${preview ? "intro--preview" : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* LEFT DOOR */}

      <motion.div
        className="intro__door intro__door--left"
        animate={
          opened
            ? {
                x: "-105%",
                rotateY: -95,
              }
            : {}
        }
        transition={{
          duration: 1.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* RIGHT DOOR */}

      <motion.div
        className="intro__door intro__door--right"
        animate={
          opened
            ? {
                x: "105%",
                rotateY: 95,
              }
            : {}
        }
        transition={{
          duration: 1.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* CENTER */}

      <motion.div
        className="intro__content"
        animate={
          opened
            ? {
                opacity: 0,
                scale: 0.9,
              }
            : {}
        }
        transition={{
          duration: 0.7,
        }}
      >
        <span className="intro__subtitle">WE ARE GETTING MARRIED</span>

        <div className="intro__divider"></div>

        <h1 className="intro__names">
          {invitation.groom}

          <span>&</span>

          {invitation.bride}
        </h1>
        <div className="intro__divider"></div>
        <motion.div
          className="intro__tap"
          onClick={onOpen}
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        >
          Tap To Open Invitation
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Intro;
