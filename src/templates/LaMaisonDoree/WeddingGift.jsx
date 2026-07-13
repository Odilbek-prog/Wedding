import { motion } from "framer-motion";
import { FaRegCopy } from "react-icons/fa6";
import leftFlower from "../../assets/images/flower-top.png";
import rightFlower from "../../assets/images/flower-bottom.png";
import "./WeddingGift.scss";

function WeddingGift() {
  const cardNumber = "8600 1234 5678 9012";

  const copyCard = () => {
    navigator.clipboard.writeText(cardNumber);
  };

  return (
    <section className="gift">
      <motion.div
        className="gift__card"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <img
          src={leftFlower}
          className="gift__flower gift__flower--left"
          alt=""
        />

        <img
          src={rightFlower}
          className="gift__flower gift__flower--right"
          alt=""
        />

        <span className="gift__subtitle">Wedding Gift</span>

        <h2>Wedding Gift</h2>

        <p className="gift__text">Your presence is our greatest gift.</p>

        <p className="gift__desc">
          If you wish to honour us with a gift, we kindly prefer monetary
          contributions. Bank details are provided below.
        </p>
        <div className="gift__preferred">
          <h3>Card</h3>

          <span>preferred</span>

          <div className="gift__divider" />

          <p>
            On the wedding day,
            <br />
            you can hand us a card
            <br />
            or envelope in person.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default WeddingGift;
