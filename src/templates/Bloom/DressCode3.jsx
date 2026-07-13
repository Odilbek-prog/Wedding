import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import "./DressCode3.scss";

import frame from "../../assets/images/dresscode3frame.png";
import people from "../../assets/images/dresscode3.png";

function DressCode3() {
  const { t } = useTranslation();

  return (
    <section className="dresscode3">
      <motion.div
        className="dresscode3__card"
        initial={{
          opacity: 0,
          y: 80,
          scale: 0.96,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
      >
        <div
          className="dresscode3__frame"
          style={{
            backgroundImage: `url(${frame})`,
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t("dresscode3.title")}
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
          >
            {t("dresscode3.subtitle")}
          </motion.h3>

          <motion.img
            src={people}
            alt={t("dresscode3.title")}
            className="dresscode3__people"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.4,
              duration: 1,
            }}
            whileHover={{
              scale: 1.04,
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default DressCode3;
