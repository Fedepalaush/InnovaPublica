import React from "react";

const About = () => {
  return (
    <section id="quienes-somos" className="section">
      <div className="container">
        {/* Encabezado centrado */}
        <div className="about-intro text-center">
          <h2 className="section-title mb-3">Quiénes somos</h2>
          <p className="section-subtitle mx-auto mb-3">
          Innova Pública es una consultora especializada en estrategia, gestión pública y desarrollo territorial.
Contamos con más de 20 años de experiencia en gobiernos locales y provinciales, integrando saberes técnicos para diseñar soluciones simples, aplicables y basadas en evidencia.
Acompañamos a instituciones que buscan mejorar su gestión, modernizar procesos y fortalecer el impacto de sus políticas en el territorio.
</p>



        </div>

        {/* Cards tipo InFocus */}
        <div className="about-grid">
          {/* Card 1 */}
          <article className="about-card">
            <div className="about-icon">🏛️</div>
            <h3 className="about-card-title">Experiencia en el Estado</h3>
            <p className="about-card-text">
              Nuestro equipo tiene casi dos décadas de experiencia en organismos municipales,
              provinciales y nacionales, lo que nos permite comprender la lógica real de la gestión
              pública.
            </p>
            <div className="about-tag-row">
              <span>Municipal</span>
              <span>Provincial</span>
              <span>Nacional</span>
            </div>
          </article>

          {/* Card 2 */}
          <article className="about-card">
            <div className="about-icon">🗺️</div>
            <h3 className="about-card-title">Mirada territorial</h3>
            <p className="about-card-text">
              Trabajamos con enfoque territorial y basado en evidencia, integrando diagnóstico,
              planificación y evaluación para fortalecer la toma de decisiones y el impacto de las
              políticas públicas.
            </p>
            <div className="about-tag-row">
              <span>Desarrollo territorial</span>
              <span>Diagnóstico</span>
              <span>Planificación</span>
            </div>
          </article>

          {/* Card 3 */}
          <article className="about-card">
            <div className="about-icon">🤝</div>
            <h3 className="about-card-title">Equipo interdisciplinario</h3>
            <p className="about-card-text">
              Articulamos saberes de derecho, administración pública, contabilidad, coaching y
              planificación estratégica para diseñar soluciones integrales y aplicables.
            </p>
            <div className="about-tag-row">
              <span>Gestión pública</span>
              <span>Estrategia</span>
              <span>Innovación</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
