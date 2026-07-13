import { motion } from "framer-motion";

import "./WeddingGift4.scss";

function WeddingGift4() {
  return (
    <section className="gift4">
      <motion.div
        className="gift4__container"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Gifts
        </motion.h2>

        <motion.p
          className="gift4__text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Your presence is the greatest gift of all.
          <br />
          If you'd like to honor us with a gift,
          <br />
          you may use the card below.
        </motion.p>

        <motion.div
          className="gift4__card"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
        >
          <div className="gift4__header">
            <h3>Card</h3>

            <span>Preferred</span>
          </div>

          <div className="gift4__divider" />

          <p className="gift4__description">
            On the wedding day,
            <br />
            you can hand us a card
            <br />
            or envelope in person.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default WeddingGift4;
