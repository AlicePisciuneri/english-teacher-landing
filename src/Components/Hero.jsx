const Hero = () => {
  return (
    <section className="hero-modern-section" id="scrollspyHeading1">
      <div className="hero-grid-container">
        <div className="hero-text-content">
          <p className="hero-subtitle">LEZIONI DI INGLESE ONLINE CON CHEZIA BERTOLDINI</p>
          <h1 className="hero-title">Migliora il tuo inglese. Comunica con più sicurezza.</h1>
          <p className="hero-description">
            Dallo studio alla conversazione quotidiana, ti aiuto a sviluppare le tue competenze con lezioni adatte al tuo livello e ai tuoi obiettivi.
          </p>
          <p className="hero-text">
            Insegnante diplomata CELTA · Oltre 10 anni di esperienza · Per bambini, ragazzi e adulti
          </p>
          <div className="mt-4 fw-bold">
            <a className="nav-link btn-hero" href="https://wa.me/393472912530?text=Ciao%20Chezia%2C%20vorrei%20prenotare%20il%20primo%20incontro%20gratuito.">
              Prenota il primo incontro gratuito
            </a>
            <a href="#scrollspyHeading4" style={{ display: 'inline-block', marginTop: '16px', textDecoration: 'underline', color: '#134647' }}>
              Scopri lezioni e tariffe
            </a>
          </div>
        </div>
        <div className="hero-visual-content">
          <div className="hero-image-card">
            <img src="/images/immagine_profilo_cliente.jpeg" alt="Chezia Bertoldini, insegnante di inglese" className="hero-profile-img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

