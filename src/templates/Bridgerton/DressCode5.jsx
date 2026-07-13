import { motion } from "framer-motion";
import "./DressCode5.scss";

import fan from "../../assets/images/fan.png";

function DressCode5() {
  return (
    <section className="dress5">
      <motion.img
        src={fan}
        alt="Dress Code"
        className="dress5__image"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="dress5__container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <span className="dress5__title">Dress Code</span>

        <p className="dress5__subtitle">Formal Black-Tie</p>

        <div className="dress5__card">
          <p className="dress5__card-text">
            In the spirit of a candlelit evening at the château, we invite you
            to dress in your most refined black-tie attire. Gentlemen in tuxedos
            or dark formal suits; ladies in floor-length gowns or elegant
            cocktail dresses.
          </p>
          <p className="dress5__card-text">
            Embrace soft romantic tones — champagne, blush, dusty blue, sage,
            plum and midnight — and step lightly on grass and gravel with heels
            that can dance until dawn. Please reserve ivory and off-white for
            the bride.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default DressCode5;
