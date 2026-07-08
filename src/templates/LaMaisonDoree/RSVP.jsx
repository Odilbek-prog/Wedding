import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa6";

import leftFlower from "../../assets/images/vase-left.png";
import rightFlower from "../../assets/images/vase-right.png";

import "./RSVP.scss";

function RSVP() {
  return (
    <section className="rsvp">
      <motion.div
        className="rsvp__card"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="rsvp__subtitle">
          We look forward to celebrating with you
        </span>

        <h2>RSVP</h2>

        <input placeholder="Full Name" />

        <input placeholder="Phone Number" />

        <textarea placeholder="Leave your wishes..." />
        <img
          src={leftFlower}
          alt=""
          className="rsvp__flower rsvp__flower--left"
        />

        <img
          src={rightFlower}
          alt=""
          className="rsvp__flower rsvp__flower--right"
        />
        <button>
          <FaPaperPlane />
          Submit Response
        </button>
      </motion.div>
    </section>
  );
}

export default RSVP;
