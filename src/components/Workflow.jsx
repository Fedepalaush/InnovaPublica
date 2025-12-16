import React from "react";

const STEPS = [
  {
    n: 1,
    title: "Diagnóstico inicial y contextualización",
    desc: "Relevamos la situación actual, los desafíos principales y el contexto institucional y territorial.",
  },
  {
    n: 2,
    title: "Diseño de propuestas personalizadas",
    desc: "Elaboramos estrategias y planes de acción ajustados a necesidades, capacidades y prioridades.",
  },
  {
    n: 3,
    title: "Acompañamiento técnico y seguimiento",
    desc: "Trabajamos junto a los equipos en la implementación, brindando soporte y ajustes sobre la marcha.",
  },
  {
    n: 4,
    title: "Evaluación de impacto",
    desc: "Medimos resultados, analizamos aprendizajes y definimos oportunidades para profundizar o escalar.",
  },
  {
    n: 5,
    title: "Herramientas de aplicación inmediata",
    desc: "Entregamos instrumentos concretos (protocolos, modelos, tableros, guías) para sostener los cambios.",
  },
];

const Workflow = () => {
  return (
    <section id="modalidad" className="section section-soft">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8 text-center">
            <h2 className="section-title mb-3">Nuestra modalidad de trabajo</h2>
            <p className="section-subtitle mx-auto">
              Diseñamos intervenciones a medida, con metodologías claras y herramientas de aplicación
              inmediata, adaptadas al contexto de cada institución y territorio.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="workflow-card">
              {STEPS.map((step, idx) => (
                <div key={step.n}>
                  <div className="d-flex align-items-start gap-3 mb-3">
                    <div className="step-badge">{step.n}</div>
                    <div>
                      <h3 className="step-title">{step.title}</h3>
                      <p className="step-desc mb-0">{step.desc}</p>
                    </div>
                  </div>
                  {idx < STEPS.length - 1 && <hr className="step-divider" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
