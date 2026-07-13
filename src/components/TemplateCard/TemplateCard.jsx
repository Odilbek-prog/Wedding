import "./TemplateCard.scss";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function TemplateCard({ template }) {
  const { t } = useTranslation();

  return (
    <motion.div
      className="template-card"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <img src={template.image} alt={template.name} />

      <div className="template-card__overlay">
        <h3>{template.name}</h3>

        <div className="template-card__buttons">
          <a
            href={template.link}
            target="_blank"
            rel="noopener noreferrer"
            className="template-card__btn"
          >
            {t("templateCard.view")}
          </a>

          <a
            href="https://t.me/normuxamedov"
            target="_blank"
            rel="noreferrer"
            className="template-card__btn"
          >
            {t("templateCard.contact")}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default TemplateCard;
