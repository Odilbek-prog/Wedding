import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./RSVP5.scss";
import fountain from "../../assets/images/fountain.png";

const RSVP5 = () => {
  const { t } = useTranslation();

  const [attendance, setAttendance] = useState("yes");

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    wishes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form data:", {
      attendance,
      ...formData,
    });

    alert(t("rsvp5.success"));
  };

  return (
    <>
      <img src={fountain} alt="fountain" className="rsvp5__topimg" />
      <section className="rsvp5">
        <h2 className="rsvp5__title">{t("rsvp5.title")}</h2>

        <p className="rsvp5__subtitle">{t("rsvp5.subtitle")}</p>

        <form className="rsvp5__form" onSubmit={handleSubmit}>
          <div className="rsvp5__group">
            <label className="rsvp5__label">{t("rsvp5.fullName")} *</label>

            <input
              className="rsvp5__input"
              type="text"
              name="fullName"
              placeholder={t("rsvp5.fullNamePlaceholder")}
              required
              onChange={handleChange}
            />
          </div>

          <div className="rsvp5__group">
            <label className="rsvp5__label">{t("rsvp5.phone")} *</label>

            <input
              className="rsvp5__input"
              type="tel"
              name="phoneNumber"
              placeholder="+998 90 123 45 67"
              required
              onChange={handleChange}
            />
          </div>

          <div className="rsvp5__group">
            <label className="rsvp5__label">{t("rsvp5.wishes")}</label>

            <textarea
              className="rsvp5__textarea"
              name="wishes"
              rows="4"
              placeholder={t("rsvp5.wishesPlaceholder")}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="rsvp5__button">
            {t("rsvp5.button")}
          </button>
        </form>
      </section>
    </>
  );
};

export default RSVP5;
