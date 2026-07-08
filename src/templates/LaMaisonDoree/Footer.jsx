import { motion } from "framer-motion";
import "./Footer.scss";

function Footer({ invitation }) {
  return (
    <footer className="footer">
      <motion.div
        className="footer__content"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="footer__subtitle">
          We Can't Wait To Celebrate With You
        </span>

        <h2 className="footer__names">
          {invitation.groom}

          <span>&</span>

          {invitation.bride}
        </h2>

        <div className="footer__divider"></div>

        <p className="footer__date">{invitation.date}</p>

        <p className="footer__thanks">
          We look forward to celebrating
          <br />
          this unforgettable day together.
        </p>

        <div className="footer__divider footer__divider--small"></div>

        <p className="footer__copyright">
          Thank you for being part of our story.
        </p>
      </motion.div>
    </footer>
  );
}

export default Footer;
