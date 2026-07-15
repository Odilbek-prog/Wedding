import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import "./WeddingGift4.scss";

function WeddingGift4() {
  const { t } = useTranslation();

  return (
    <section className="gift4">
      <motion.div
        className="gift4__container"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {t("gift4.title")}
        </motion.h2>

        <motion.p
          className="gift4__text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {t("gift4.text")}
        </motion.p>
      </motion.div>
    </section>
  );
}

export default WeddingGift4;
