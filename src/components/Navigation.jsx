import React, { useEffect, useState } from "react";

const SECTIONS = [
  { id: "inicio", label: "Inicio" },
  { id: "quienes-somos", label: "Quiénes somos" },
  { id: "servicios", label: "Servicios" },
  { id: "modalidad", label: "Modalidad de trabajo" },
  { id: "contacto", label: "Contacto" },
];

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Navigation = () => {
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const handler = () => {
      const scrollPos = window.scrollY;
      let current = "inicio";

      SECTIONS.forEach((s) => {
        const el = document.getElementById(s.id);
        if (!el) return;
        const offsetTop = el.offsetTop - 120; // margen para navbar
        if (scrollPos >= offsetTop) current = s.id;
      });

      setActive(current);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
    <div className="container">
  
      {/* LOGO */}
      <a className="navbar-brand d-flex align-items-center" href="/">
        <img
          src="/assets/logo.png"
          alt="Innova Pública"
          style={{ height: "68px", width: "auto" }}
          className="me-2"
        />
      </a>
  
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
  
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto align-items-lg-center">
          <li className="nav-item">
            <a className="nav-link" href="#inicio">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#quienes-somos">Quiénes somos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#servicios">Servicios</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#modalidad">Modalidad de trabajo</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contacto">Contacto</a>
          </li>
  
          {/* Botón */}
          <li className="nav-item ms-lg-3">
            <a className="btn btn-primary rounded-pill px-3" href="#contacto">
              Iniciá un proyecto
            </a>
          </li>
        </ul>
      </div>
  
    </div>
  </nav>
  
  );
};

export default Navigation;
