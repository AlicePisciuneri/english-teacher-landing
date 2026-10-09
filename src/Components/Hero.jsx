import React from 'react'

const Hero = () => {
  return (
    <section className="hero-modern-section" id="scrollspyHeading1">
      <div className="hero-grid-container">
        <div className="hero-text-content">
          <h1 className="hero-title fst-italic">
            PORTA IL TUO INGLESE <br /> AL LIVELLO SUCCESSIVO.
          </h1>
          <p className="hero-description">
            Un approccio strutturato e flessibile, progettato su misura per consolidare la tua padronanza dell'inglese, sia in ambito professionale che quotidiano.
          </p>
          <p className='hero-text text-uppercase'>
            Lezioni di inglese online per ogni età · Metodo certificato CELTA · Lezioni individuali o di gruppo personalizzate
          </p>
          <div className="mt-4 fst-italic fw-bold">
            <a className="nav-link btn-hero" href="#scrollspyHeading4" >
              Scopri il percorso più adatto a te
            </a>
          </div>
        </div>
        <div className="hero-visual-content">
          <div className="hero-image-card">
            <img
              src='../images/immagine_profilo_cliente.jpeg'
              alt='Insegnante di inglese'
              className="hero-profile-img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
