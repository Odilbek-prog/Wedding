import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "./Countdown5.scss";

import curtainLeft from "../../assets/images/curtain-left.png";
import curtainRight from "../../assets/images/curtain-right.png";

function Countdown5({ invitation }) {
  const calculateTimeLeft = () => {
    const difference = new Date(invitation.date) - new Date();

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
        2,
        "0",
      ),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
        2,
        "0",
      ),
      minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(
        2,
        "0",
      ),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const eventDate = new Date(invitation.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="countdown5" id="countdown">
      <img
        src={curtainLeft}
        alt=""
        className="countdown5__curtain countdown5__curtain--left"
      />

      <img
        src={curtainRight}
        alt=""
        className="countdown5__curtain countdown5__curtain--right"
      />

      <motion.div
        className="countdown5__content"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2>Countdown</h2>

        <p className="countdown5__subtitle">Until {eventDate}</p>

        <div className="countdown5__timer">
          <div className="countdown5__item">
            <span>{timeLeft.days}</span>
            <small>Days</small>
          </div>

          <div className="countdown5__item">
            <span>{timeLeft.hours}</span>
            <small>Hours</small>
          </div>

          <div className="countdown5__item">
            <span>{timeLeft.minutes}</span>
            <small>Minutes</small>
          </div>

          <div className="countdown5__item">
            <span>{timeLeft.seconds}</span>
            <small>Seconds</small>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Countdown5;
