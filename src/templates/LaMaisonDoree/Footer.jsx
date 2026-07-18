import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import footerleft from "../../assets/images/footer-left.png";
import footercenter from "../../assets/images/footer-center.png";
import footerright from "../../assets/images/footer-right.png";

import "./Footer.scss";

function Footer({ invitation }) {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <img
        src={footerleft}
        alt="footerleft"
        className="footer__curtain footer__curtain-left"
      />
      <img
        src={footercenter}
        alt="footercenter"
        className="footer__curtain footer__curtain-center"
      />
      <img
        src={footerright}
        alt="footerright"
        className="footer__curtain footer__curtain-right"
      />
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
