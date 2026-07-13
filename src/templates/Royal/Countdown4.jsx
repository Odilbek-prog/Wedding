import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "./Countdown4.scss";

function Countdown4({ invitation }) {
  const calculateTime = () => {
    const target = new Date(invitation.date).getTime();
    const now = new Date().getTime();

    const distance = target - now;

    if (distance <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
      };
    }

    return {
      days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(
        2,
        "0",
      ),
      hours: String(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      ).padStart(2, "0"),
      minutes: String(
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      ).padStart(2, "0"),
    };
  };

  const [time, setTime] = useState(calculateTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const eventDate = new Date(invitation.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="countdown4" id="countdown">
      <motion.div
        className="countdown4__container"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Countdown
        </motion.h2>

        <motion.p
          className="countdown4__subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          UNTIL {eventDate.toUpperCase()}
        </motion.p>

        <div className="countdown4__grid">
          <div className="countdown4__item">
            <h3>{time.days}</h3>
            <span>DAYS</span>
          </div>

          <div className="countdown4__divider" />

          <div className="countdown4__item">
            <h3>{time.hours}</h3>
            <span>HOURS</span>
          </div>

          <div className="countdown4__divider" />

          <div className="countdown4__item">
            <h3>{time.minutes}</h3>
            <span>MINUTES</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Countdown4;
