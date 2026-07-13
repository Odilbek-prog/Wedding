import { motion } from "framer-motion";

import "./Footer3.scss";

import frame from "../../assets/images/footerframe.png";

function Footer3({ invitation }) {
  return (
    <footer className="footer3">
      <motion.div
        className="footer3__frame"
        style={{
          backgroundImage: `url(${frame})`,
        }}
        initial={{
          opacity: 0,
          y: 60,
          scale: 0.96,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
      >
        <motion.div
          className="footer3__content"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
            duration: 0.8,
          }}
        >
          <h2>
            {invitation.bride}

            <span>&</span>

            {invitation.groom}
          </h2>

          <div className="footer3__divider" />

          <p>
            {new Date(invitation.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer3;
