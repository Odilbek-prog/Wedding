import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import "./Footer4.scss";

import rings from "../../assets/images/rings.png";

function Footer4({ invitation }) {
  const { i18n } = useTranslation();

  const locale = i18n.language === "ru" ? "ru-RU" : "uz-UZ";

  const eventDate = new Date(invitation.date).toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <footer className="footer4">
      <motion.img
        src={rings}
        alt=""
        className="footer4__rings"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      <motion.div
        className="footer4__content"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="footer4__names">
          <span>{invitation.groom}</span>

          <small>&</small>

          <span>{invitation.bride}</span>
        </h2>

        <div className="footer4__divider" />

        <p className="footer4__date">{eventDate}</p>
      </motion.div>
    </footer>
  );
}

export default Footer4;
