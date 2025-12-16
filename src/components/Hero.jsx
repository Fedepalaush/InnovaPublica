import React from "react";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Hero = () => {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-bg-shape hero-bg-shape-1" />
      <div className="hero-bg-shape hero-bg-shape-2" />

      <div className="container position-relative">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="hero-badge">
              <span className="hero-dot" />
              Consultoría en gestión pública y desarrollo territorial
            </div>
            <h1 className="hero-title mb-3">
              Innovación al servicio
              <br />
              de la gestión pública.
            </h1>
            <p className="hero-subtitle mb-4">
              Innova Pública es la unión entre innovación y gestión estatal. Acompañamos a gobiernos
              y equipos técnicos a transformar el Estado con estrategias modernas y soluciones
              orientadas a mejorar la vida de las personas.
            </p>
            <div className="d-flex flex-wrap align-items-center gap-3">
              <button
                type="button"
                className="btn btn-light hero-btn-primary"
                onClick={() => scrollToSection("servicios")}
              >
                Conocé nuestros servicios
              </button>
              <button
                type="button"
                className="btn btn-outline-light hero-btn-secondary"
                onClick={() => scrollToSection("contacto")}
              >
                Agendar una reunión
              </button>
            </div>
            <div className="hero-meta mt-4 d-flex flex-wrap gap-4">
              <div>
                <span className="hero-meta-label">+20 años</span>
                <p className="hero-meta-text mb-0">Experiencia en gestión pública</p>
              </div>
              <div>
                <span className="hero-meta-label">Múltiples niveles</span>
                <p className="hero-meta-text mb-0">Municipal · Provincial · Nacional</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 d-flex justify-content-lg-end">
            <div className="hero-image-wrap">
              <div className="hero-image-main">
                {/* Reemplazá el src por tu imagen real */}
                <img
                  src="/assets/hero-innova.jpg"
                  alt="Equipo de gestión pública trabajando"
                />
              </div>
              <div className="hero-info-card">
                <p className="hero-info-title mb-1">Gestión basada en evidencia</p>
                <p className="hero-info-text mb-2">
                  Diagnóstico, planificación y evaluación con foco en resultados.
                </p>
                <div className="hero-pills">
                  <span>Gestión pública</span>
                  <span>Estrategia</span>
                  <span>Territorio</span>
                </div>
              </div>
              <div className="hero-badge-floating">
                <span className="hero-badge-dot" />
                Proyectos en marcha
                <span className="hero-badge-count">+10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
