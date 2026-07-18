import { useTranslation } from "react-i18next";

import templates from "../data/templates";
import TemplateCard from "../components/TemplateCard/TemplateCard";
import HomeHero from "../components/HomeHero/HomeHero";

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <HomeHero />

      <section className="templates" id="templates">
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
