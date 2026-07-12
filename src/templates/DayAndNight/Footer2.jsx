import { motion } from "framer-motion";
import "./Footer2.scss";

function Footer2({ invitation }) {
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
          {invitation.date}
        </motion.p>

        <motion.p
          className="footer2__text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          We can't wait to celebrate this beautiful day with you.
        </motion.p>
      </motion.div>
    </footer>
  );
}

export default Footer2;
