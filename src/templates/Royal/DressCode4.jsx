import { motion } from "framer-motion";

import "./DressCode4.scss";

import tower from "../../assets/images/dress4top.png";
import cardBg from "../../assets/images/dress4bg.png";

function DressCode4() {
  return (
    <section
      className="dress4"
      style={{
        backgroundImage: `url(${cardBg})`,
      }}
    >
      <motion.img
        src={tower}
        alt=""
        className="dress4__tower"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      <motion.div
        className="dress4__card"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Dress Code
        </motion.h2>

        <div className="dress4__section">
          <h3>Women</h3>

          <p>Cocktail or formal dress</p>
        </div>

        <div className="dress4__divider" />

        <div className="dress4__section">
          <h3>Men</h3>

          <p>Dark suit and tie</p>
        </div>
      </motion.div>
    </section>
  );
}

export default DressCode4;
