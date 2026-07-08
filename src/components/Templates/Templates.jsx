import "./Templates.scss";
import templates from "../../data/templates";
import TemplateCard from "../TemplateCard/TemplateCard";
import PreviewModal from "../PreviewModal/PreviewModal";
import { useState } from "react";

function Templates() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handlePreview = (template) => {
    setSelectedTemplate(template);
  };

  return (
    <section id="templates" className="templates">
      <h2>Choose Your Template</h2>

      <div className="grid">
        {templates.map((template) => (
          <TemplateCard
            key={template.id}
            template={template}
            onPreview={handlePreview}
          />
        ))}
      </div>

      <PreviewModal
        isOpen={selectedTemplate !== null}
        template={selectedTemplate}
        onClose={() => setSelectedTemplate(null)}
      />
    </section>
  );
}

export default Templates;