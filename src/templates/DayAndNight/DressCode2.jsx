import { motion } from "framer-motion";
import "./DressCode2.scss";

import dressCodeImage from "../../assets/images/dresscode.png";

function DressCode2() {
  return (
    <section className="dress2">
      <motion.div
        className="dress2__container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <span className="dress2__title">Dress Code</span>

        <p className="dress2__subtitle">A FEW GENTLE REMINDERS</p>

        <motion.img
          src={dressCodeImage}
          alt="Dress Code"
          className="dress2__image"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.5 }}
        />

        <div className="dress2__card">
          <h3>Formal Attire</h3>

          <p className="dress2__text">
            We kindly ask you to dress formally to join us on this very special
            day.
          </p>

          <p className="dress2__note">
            Please avoid wearing white — it is reserved for the bride.
          </p>

          <div className="dress2__divider"></div>

          <p className="dress2__footer">
            We recommend ladies avoid stiletto heels.
            <br />
            The celebration takes place on a country estate with uneven terrain,
            so wedges, block heels, low heels, or flats will be much more
            comfortable.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default DressCode2;
