import { motion } from "framer-motion";
import { useState } from "react";

import "./RSVP3.scss";

import topFlowers from "../../assets/images/rsvptop.png";
import bottomFlowers from "../../assets/images/rsvpbottom.png";

function RSVP3() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    alert("Thank you for your response!");
  };

  return (
    <section className="rsvp3">
      <motion.div
        className="rsvp3__card"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <img
          src={topFlowers}
          alt=""
          className="rsvp3__flowers-top"
          draggable={false}
        />

        <img
          src={bottomFlowers}
          alt=""
          className="rsvp3__flowers-bottom"
          draggable={false}
        />

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          RSVP
        </motion.h2>

        <div className="rsvp3__line" />

        <p className="rsvp3__subtitle">
          Kindly respond at your earliest convenience
        </p>

        <motion.form
          className="rsvp3__form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
        >
          <div className="rsvp3__group">
            <label>Full Name</label>

            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={form.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="rsvp3__group">
            <label>Phone Number</label>

            <input
              type="tel"
              name="phone"
              placeholder="+998 (90) 123-45-67"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="rsvp3__group">
            <label>Leave Your Wishes</label>

            <textarea
              name="message"
              rows={6}
              placeholder="Write your wishes..."
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <motion.button
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.97,
            }}
            type="submit"
          >
            Send Wishes
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}

export default RSVP3;
