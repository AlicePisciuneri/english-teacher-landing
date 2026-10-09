import React from 'react';

const Contact = () => {

  return (
    <section className="contact-modern-section" id="scrollspyHeading3">
      <div className="contact-grid-container">
        <div className="contact-text">
          <div className="contact-title">
            <h1>CONTATTI</h1>
          </div>

          <p>Prenota il tuo primo incontro gratuito</p>
          <h4>DISPONIBILTA' ATTUALE</h4>
          <ul>
            <li>Lunedì: 17:30</li>
            <li>Martedì: tutto il giorno</li>
            <li>Mercoledì: 16:00–19:00</li>
            <li>Venerdì: tutto il giorno</li>
          </ul>
        </div>
        <div className="contact-btn">
          <div className="email">
            <a className="btn-email" href="mailto:cheagle@hotmail.com">
              <div className="email-top-row">
                <i className="bi bi-envelope icon-email"></i>
                <span>Scrivimi via email</span>
              </div>
              <span className="email-address">cheagle@hotmail.com</span>
            </a>
          </div>
          <a className="btn-whatsapp" href="https://wa.me/393472912530?text=Salve,%20vorrei%20informazioni%20sulle%20lezioni">
            <i className="bi bi-whatsapp icon-whatsapp"></i>Contattami su Whatsapp
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
