import React from "react";

const Footer = () => {
  return (
    <footer className="footer border-top section-soft py-3">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <span className="text-muted small">
          © {new Date().getFullYear()} Innova Pública. Todos los derechos reservados.
        </span>
        <span className="text-muted small">
          Innovación y gestión para transformar el Estado.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
