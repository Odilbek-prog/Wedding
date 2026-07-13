import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import "./Footer2.scss";

function Footer2({ invitation }) {
  const { t, i18n } = useTranslation();

  const locale = i18n.language === "ru" ? "ru-RU" : "uz-UZ";

  const eventDate = new Date(invitation.date).toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <footer className="footer2">
      <motion.div
        className="footer2__overlay"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="footer2__names"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {invitation.groom} <span>&</span> {invitation.bride}
        </motion.h2>

        <motion.p
          className="footer2__date"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {eventDate}
        </motion.p>

        <motion.p
          className="footer2__text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {t("footer2.text")}
        </motion.p>
      </motion.div>
    </footer>
  );
}

export default Footer2;
