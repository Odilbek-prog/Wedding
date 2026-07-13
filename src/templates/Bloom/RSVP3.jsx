import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import "./RSVP3.scss";

import topFlowers from "../../assets/images/rsvptop.png";
import bottomFlowers from "../../assets/images/rsvpbottom.png";

function RSVP3() {
  const { t } = useTranslation();

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

    alert(t("rsvp3.success"));
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
          {t("rsvp3.title")}
        </motion.h2>

        <div className="rsvp3__line" />

        <p className="rsvp3__subtitle">{t("rsvp3.subtitle")}</p>

        <motion.form
          className="rsvp3__form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
        >
          <div className="rsvp3__group">
            <label>{t("rsvp3.fullName")}</label>

            <input
              type="text"
              name="fullName"
              placeholder={t("rsvp3.fullNamePlaceholder")}
              value={form.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="rsvp3__group">
            <label>{t("rsvp3.phone")}</label>

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
            <label>{t("rsvp3.wishes")}</label>

            <textarea
              name="message"
              rows={6}
              placeholder={t("rsvp3.wishesPlaceholder")}
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
            {t("rsvp3.button")}
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}

export default RSVP3;
