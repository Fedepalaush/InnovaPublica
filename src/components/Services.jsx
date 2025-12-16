import React from "react";

const SERVICES = [
    {
      icon: "📊",
      chip: "Estrategia política y territorial",
      title: "Acompañamiento estratégico",
      desc: "Decisiones estratégicas con lectura real del territorio y del contexto político–social.",
      items: [
        "Diagnóstico político–institucional",
        "Mapa de actores y análisis de poder",
        "Análisis de clima social y escenarios",
        "Narrativa política e institucional",
        "Acompañamiento a gabinetes y equipos",
      ],
    },
    {
      icon: "⚙️",
      chip: "Modernización del Estado",
      title: "Calidad de gestión y gobierno digital",
      desc: "Modelos de gestión más simples, eficientes y cercanos a la ciudadanía.",
      items: [
        "Simplificación y rediseño de trámites",
        "Gobierno digital y ventanillas únicas",
        "Procesos y circuitos administrativos",
        "Modelos de calidad pública (ISO, CAF, etc.)",
        "Gestión por resultados e indicadores",
      ],
    },
    {
      icon: "🗺️",
      chip: "Gestión local y desarrollo territorial",
      title: "Gestión pública local",
      desc: "Fortalecimiento de municipios y gobiernos locales con foco en comunidad y territorio.",
      items: [
        "Planificación estratégica y planes de gestión",
        "Programas de desarrollo local",
        "Fortalecimiento institucional y organizacional",
        "Políticas públicas locales",
        "Atención al vecino y participación ciudadana",
      ],
    },
    {
      icon: "📣",
      chip: "Comunicación pública y crisis",
      title: "Comunicación gubernamental",
      desc: "Comunicación clara, empática y profesional, especialmente en contextos sensibles.",
      items: [
        "Discursos y mensajes clave",
        "Comunicados oficiales",
        "Estrategias de comunicación gubernamental",
        "Vocería y medios",
        "Comunicación de crisis y reputación",
      ],
    },
    {
      icon: "🎓",
      chip: "Formación y capacitación",
      title: "Capacitación para el sector público",
      desc: "Programas de formación para fortalecer habilidades y desempeño institucional.",
      items: [
        "Liderazgo público y habilidades directivas",
        "Gestión de calidad en la administración pública",
        "Documentos administrativos",
        "Comunicación y trato con la ciudadanía",
        "Gestión por resultados y planificación",
      ],
    },
  
    // 🆕 Nuevo servicio agregado
    {
        icon: "📍",
        chip: "Análisis territorial",
        title: "Análisis territorial y diseño de políticas públicas",
        desc: "Intervenciones basadas en diagnóstico local y lectura político–institucional para mejorar la gestión y el impacto en las comunidades.",
        items: [
          "Análisis de actores y escenarios territoriales",
          "Diagnóstico comunitario y participación",
          "Identificación de problemas públicos",
          "Diseño de programas y políticas locales",
          "Evaluación ex ante e impacto esperado",
          "Recomendaciones para la toma de decisiones"
        ],
        tags: ["Desarrollo territorial", "Políticas públicas", "Diagnóstico", "Estrategia"]
      }
      
  ];
  

const Services = () => {
  return (
    <section id="servicios" className="section">
      <div className="container">
        {/* Encabezado */}
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8 text-center">
            <h2 className="section-title mb-3">Servicios</h2>
            <p className="section-subtitle mx-auto">
              Acompañamos a gobiernos y organizaciones en la toma de decisiones, el diseño de
              políticas públicas y la modernización de la gestión, con soluciones adaptadas a cada
              territorio.
            </p>
          </div>
        </div>

        {/* Grid de servicios */}
        <div className="row g-4">
          {SERVICES.map((service) => (
            <div className="col-md-6 col-lg-4" key={service.title}>
              <article className="service-card h-100">
                <div className="service-icon">{service.icon}</div>
                <div className="service-chip">{service.chip}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <ul className="service-list mb-0">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>

        {/* Highlight moderno */}
        <div className="row mt-5 justify-content-center">
          <div className="col-xl-10">
            <section className="service-highlight">
              <div className="row align-items-center g-4">
                <div className="col-md-5">
                  <div className="service-highlight-media">
                    <img
                      src="/assets/mapa-territorial.jpg"
                      alt="Mapa territorial y planificación de políticas públicas"
                    />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="service-highlight-content">
                    <span className="service-highlight-chip">
                      Mirada territorial y basada en evidencia
                    </span>
                    <h3 className="service-highlight-title">
                      Diagnóstico, planificación y evaluación con foco en resultados.
                    </h3>
                    <p className="service-highlight-text">
                      Combinamos diagnóstico técnico, análisis político–institucional y conocimiento
                      del territorio para diseñar intervenciones realistas, sostenibles y medibles.
                    </p>
                    <ul className="service-highlight-list mb-0">
                      <li>Herramientas de planificación estratégica.</li>
                      <li>Indicadores y tableros de seguimiento.</li>
                      <li>Evaluaciones de impacto y mejora continua.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
