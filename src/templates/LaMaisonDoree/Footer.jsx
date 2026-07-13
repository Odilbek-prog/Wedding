import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import "./Footer.scss";

function Footer({ invitation }) {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <motion.div
        className="footer__content"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="footer__subtitle">{t("footer.subtitle")}</span>

        <h2 className="footer__names">
          {invitation.groom}

          <span>&</span>

          {invitation.bride}
        </h2>

        <div className="footer__divider"></div>

        <p className="footer__date">{invitation.date}</p>

        <p className="footer__thanks">{t("footer.thanks")}</p>

        <div className="footer__divider footer__divider--small"></div>

        <p className="footer__copyright">{t("footer.copyright")}</p>
      </motion.div>
    </footer>
  );
}

export default Footer;
