import { motion } from "framer-motion";
import "./RSVP2.scss";

import couple from "../../assets/images/rsvpimg.png";

function RSVP2() {
  return (
    <section className="rsvp2">
      <motion.div
        className="rsvp2__card"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={couple}
          alt=""
          className="rsvp2__image"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        />

        <h2>RSVP</h2>

        <p className="rsvp2__subtitle">We hope you can make it</p>

        <form className="rsvp2__form">
          <input placeholder="Full Name" />

          <input placeholder="Phone Number" />

          <textarea placeholder="Leave your wishes..." />

          <button type="submit">Submit Response</button>
        </form>
      </motion.div>
    </section>
  );
}

export default RSVP2;
