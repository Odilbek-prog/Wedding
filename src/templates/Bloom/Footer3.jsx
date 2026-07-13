import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import "./Footer3.scss";

import frame from "../../assets/images/footerframe.png";

function Footer3({ invitation }) {
  const { i18n } = useTranslation();

  const eventDate = new Date(invitation.date).toLocaleDateString(
    i18n.language === "ru" ? "ru-RU" : "uz-UZ",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    },
  );

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

          <p>{eventDate}</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer3;
