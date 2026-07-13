import React, { useState } from "react";
import "./RSVP5.scss";

const RSVP5 = () => {
  const [attendance, setAttendance] = useState("yes");
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    wishes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", { attendance, ...formData });
    alert("Thank you! We have received your response.");
  };

  return (
    <section className="rsvp5">
      <h2 className="rsvp5__title">RSVP</h2>
      <p className="rsvp5__subtitle">We hope you can make it.</p>

      <form className="rsvp5__form" onSubmit={handleSubmit}>
        <div className="rsvp5__group">
          <label className="rsvp5__label">Full name *</label>
          <input
            className="rsvp5__input"
            type="text"
            name="fullName"
            placeholder="Your full name"
            required
            onChange={handleChange}
          />
        </div>

        <div className="rsvp5__group">
          <label className="rsvp5__label">Phone number *</label>
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
          <label className="rsvp5__label">Leave your wishes</label>
          <textarea
            className="rsvp5__textarea"
            name="wishes"
            rows="4"
            placeholder="Write your wishes here..."
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="rsvp5__button">
          Send Response
        </button>
      </form>
    </section>
  );
};

export default RSVP5;
