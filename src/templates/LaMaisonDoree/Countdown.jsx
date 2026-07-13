import { motion } from "framer-motion";
import Countdown from "react-countdown";
import { useTranslation } from "react-i18next";

import "./Countdown.scss";

function CountdownSection({ invitation }) {
  const { t } = useTranslation();

  return (
    <section className="countdown">
      <motion.div
        className="countdown__header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="countdown__subtitle">{t("countdown.subtitle")}</span>

        <h2>{t("countdown.title")}</h2>

        <p>{t("countdown.description")}</p>
      </motion.div>

      <Countdown
        date={new Date(`${invitation.date} ${invitation.time}`)}
        renderer={({ days, hours, minutes, seconds }) => (
          <div className="countdown__grid">
            {[
              {
                number: days,
                label: t("countdown.days"),
              },
              {
                number: hours,
                label: t("countdown.hours"),
              },
              {
                number: minutes,
                label: t("countdown.minutes"),
              },
              {
                number: seconds,
                label: t("countdown.seconds"),
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="countdown__item"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
              >
                <div className="countdown__number">
                  {String(item.number).padStart(2, "0")}
                </div>

                <div className="countdown__label">{item.label}</div>
              </motion.div>
            ))}
          </div>
        )}
      />
    </section>
  );
}

export default CountdownSection;
