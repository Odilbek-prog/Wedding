import { motion } from "framer-motion";
import ladiesFlowers from "../../assets/images/bouquet.png";
import menFlowers from "../../assets/images/menflower.png";
import "./DressCode.scss";

function DressCode() {
  return (
    <section className="dress">
      <motion.h2
        className="dress__title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Dress Code
      </motion.h2>

      <div className="dress__wrapper">
        <motion.div
          className="dress__card"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img
            src={ladiesFlowers}
            className="dress__flower dress__flower--left"
            alt=""
          />

          <span className="dress__day">FOR LADIES</span>

          <h3>White Cocktail Attire</h3>

          <p>Elegant dresses in soft neutral tones are highly appreciated.</p>

          <div className="dress__colors">
            <span style={{ background: "#fff" }} />
            <span style={{ background: "#f4efe7" }} />
            <span style={{ background: "#e4d4bb" }} />
            <span style={{ background: "#c9ae85" }} />
          </div>
        </motion.div>

        <motion.div
          className="dress__card"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img
            src={menFlowers}
            className="dress__flower dress__flower--right"
            alt=""
          />

          <span className="dress__day">FOR GENTLEMEN</span>

          <h3>Black Tie</h3>

          <p>Black suit or tuxedo with white shirt and black shoes.</p>

          <div className="dress__colors">
            <span style={{ background: "#111" }} />
            <span style={{ background: "#444" }} />
            <span style={{ background: "#777" }} />
            <span style={{ background: "#fff" }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default DressCode;
