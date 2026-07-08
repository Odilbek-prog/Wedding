import { motion } from "framer-motion";
import "./TapScreen.scss";

function TapScreen({ invitation, onStart }) {
  return (
    <motion.section
      className="tap-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onStart}
    >
      <div className="tap-screen__overlay"></div>

      <div className="tap-screen__content">
        <span className="tap-screen__subtitle">
          Together with their families
        </span>

        <h1>
          {invitation.groom}
          <span>&</span>
          {invitation.bride}
        </h1>

        <motion.div
          className="tap-screen__circle"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />

        <p>Tap anywhere to begin</p>
      </div>
    </motion.section>
  );
}

export default TapScreen;
