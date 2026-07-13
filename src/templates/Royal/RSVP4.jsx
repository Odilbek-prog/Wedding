import { motion } from "framer-motion";

import "./RSVP4.scss";

import ornament from "../../assets/images/ornament.png";

function RSVP4() {
  return (
    <section className="rsvp4">
      <motion.img
        src={ornament}
        alt=""
        className="rsvp4__ornament"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      <motion.div
        className="rsvp4__header"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>RSVP</h2>

        <p>Let us know if you can make it</p>
      </motion.div>

      <motion.form
        className="rsvp4__card"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="rsvp4__group">
          <label>Full Name</label>

          <input type="text" placeholder="Enter your full name" />
        </div>

        <div className="rsvp4__group">
          <label>Phone Number</label>

          <input type="tel" placeholder="+998 90 123 45 67" />
        </div>

        <div className="rsvp4__group">
          <label>Leave Your Wishes</label>

          <textarea rows="6" placeholder="Write your wishes..." />
        </div>

        <motion.button
          type="submit"
          className="rsvp4__button"
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.97,
          }}
        >
          Submit Response
        </motion.button>
      </motion.form>
    </section>
  );
}

export default RSVP4;
