import { useState } from "react";

import templates from "../data/templates";

import TemplateCard from "../components/TemplateCard/TemplateCard";
import PhonePreview from "../components/PhonePreview/PhonePreview";
import LaMaisonDoree from "../templates/LaMaisonDoree";

function Home() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section className="home-hero">
        <h1>Wedding Invitations</h1>

        <p>
          Choose one of our elegant invitation templates and create your
          unforgettable wedding invitation.
        </p>
      </section>
      <section className="templates">
        <h2>Templates</h2>

        <div className="templates-grid">
          {templates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              onPreview={setSelected}
            />
          ))}
        </div>
      </section>

      <PhonePreview open={!!selected} onClose={() => setSelected(null)}>
        {selected?.component === "la-maison-doree" && <LaMaisonDoree preview />}
      </PhonePreview>
    </>
  );
}

export default Home;
