import { useTranslation } from "react-i18next";

import templates from "../data/templates";
import TemplateCard from "../components/TemplateCard/TemplateCard";

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <section className="home-hero">
        <h1>{t("home.title")}</h1>

        <p>{t("home.description")}</p>
      </section>

      <section className="templates">
        <h2>{t("home.templates")}</h2>

        <div className="templates-grid">
          {templates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
