import { motion } from "framer-motion";
import { useState } from "react";
import { FaRegCopy, FaCheck } from "react-icons/fa6";

import "./WeddingGift2.scss";

import flowers from "../../assets/images/giftflowers.png";

function WeddingGift2() {
  const cardNumber = "8600 1234 5678 9012";

  const [copied, setCopied] = useState(false);

  const copyCard = async () => {
    await navigator.clipboard.writeText(cardNumber);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section className="gift2">
      <motion.div
        className="gift2__wrapper"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <span className="gift2__title">Gifts</span>

        <p className="gift2__subtitle">A THOUGHTFUL GESTURE</p>

        <div className="gift2__card">
          <p className="gift2__text">
            Your presence is the greatest gift of all.
            <br />
            If you'd like to honor us with a gift, you may use the card below.
          </p>

          <div className="gift2__method">
            <div className="gift2__methodHead">
              <span>Card</span>

              <small>preferred</small>
            </div>

            <p className="gift2__methodText">
              On the wedding day, you can hand us a card or envelope in person.
            </p>
          </div>

          <img src={flowers} alt="" className="gift2__flowers" />
        </div>
      </motion.div>
    </section>
  );
}

export default WeddingGift2;
