import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    nombre: "",
    institucion: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Acá integrarías con tu backend, Formspree, EmailJS, etc.
    console.log("Formulario enviado:", form);
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto.");
    setForm({ nombre: "", institucion: "", email: "", mensaje: "" });
  };

  return (
    <section id="contacto" className="section">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8 text-center">
            <h2 className="section-title mb-3">Contacto</h2>
            <p className="section-subtitle mx-auto">
              En Innova Pública valoramos el trabajo colaborativo y la construcción de soluciones
              estratégicas adaptadas a cada territorio. Si deseás iniciar un proyecto o conocer más
              sobre nuestros servicios, estamos a disposición.
            </p>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-lg-5">
            <div className="contact-card mb-3 mb-lg-0">
              <h3 className="contact-title mb-3">Datos de contacto</h3>
              <p className="mb-2">
                📩 Correo institucional:{" "}
                <span className="contact-email">contacto@innovapublica.com</span>
              </p>
              <p className="text-muted mb-0">
                Podemos coordinar una reunión virtual para conocer el contexto de tu institución y
                explorar líneas de trabajo en conjunto.
              </p>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="contact-card">
              <h3 className="contact-title mb-3">Enviános tu consulta</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    className="form-control"
                    placeholder="Tu nombre completo"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="institucion" className="form-label">
                    Institución
                  </label>
                  <input
                    id="institucion"
                    name="institucion"
                    type="text"
                    className="form-control"
                    placeholder="Organismo / institución"
                    value={form.institucion}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="tuemail@ejemplo.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="mensaje" className="form-label">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows="4"
                    className="form-control"
                    placeholder="Contanos brevemente en qué te podemos acompañar"
                    value={form.mensaje}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary rounded-pill px-4">
                  Enviar consulta
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
