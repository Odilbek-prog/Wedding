import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "./Countdown3.scss";

function Countdown3({ invitation }) {
  const targetDate = new Date(invitation.date);

  const getTime = () => {
    const now = new Date();

    const diff = targetDate - now;

    if (diff <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
      };
    }

    return {
      days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0"),

      hours: String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(
        2,
        "0",
      ),

      minutes: String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0"),
    };
  };

  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="countdown3">
      <motion.div
        className="countdown3__wrapper"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="countdown3__title">Countdown</h2>

        <p className="countdown3__date">
          UNTIL {invitation.day} {invitation.month} {invitation.year}
        </p>

        <div className="countdown3__timer">
          <div className="countdown3__item">
            <motion.span
              key={time.days}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {time.days}
            </motion.span>

            <small>DAYS</small>
          </div>

          <div className="countdown3__item">
            <motion.span
              key={time.hours}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {time.hours}
            </motion.span>

            <small>HOURS</small>
          </div>

          <div className="countdown3__item">
            <motion.span
              key={time.minutes}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {time.minutes}
            </motion.span>

            <small>MINUTES</small>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Countdown3;
