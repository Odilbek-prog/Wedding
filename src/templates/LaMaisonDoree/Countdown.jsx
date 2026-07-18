import { motion } from "framer-motion";
import Countdown from "react-countdown";
import { useTranslation } from "react-i18next";
import columnleft from "../../assets/images/column-left.png";
import columnright from "../../assets/images/column-right.png";

import "./Countdown.scss";

function CountdownSection({ invitation }) {
  const { t } = useTranslation();
  const weddingDate = new Date(invitation.date);

  const month = t(`months.${weddingDate.getMonth()}`);
  const day = weddingDate.getDate();
  const year = weddingDate.getFullYear();

  return (
    <section className="countdown">
      <img
        className="countdown__column countdown__column-left"
        src={columnleft}
        alt="columnleft"
      />
      <img
        className="countdown__column countdown__column-right"
        src={columnright}
        alt="columnright"
      />
      <motion.div
        className="countdown__header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1>{t("countdown.title")}</h1>

        <p>
          {t("countdown.description")} {day} {month} {year}
        </p>
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
            ].map((item, index) => (
              <>
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
                <hr className="countdown__hr" />
              </>
            ))}
          </div>
        )}
      />
    </section>
  );
}

export default CountdownSection;
