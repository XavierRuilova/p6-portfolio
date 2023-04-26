import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="content-section	">
        <h2 className="section-title">Contacto</h2>
        <div className="row">
          <div className="column">
            <h2>Teléfono</h2>
            <span className="contact-info">+593 - 996306676</span>
          </div>
          <div className="column">
            <h2>Correo</h2>
            <span className="contact-info">xavi.ruilovad@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
