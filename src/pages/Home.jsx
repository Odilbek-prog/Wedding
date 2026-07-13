import templates from "../data/templates";

import TemplateCard from "../components/TemplateCard/TemplateCard";

function Home() {
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
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
