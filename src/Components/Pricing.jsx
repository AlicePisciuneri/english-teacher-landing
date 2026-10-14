import React from 'react'

const Pricing = () => {

  const packages = [{
    id: 1,
    title: "BASIC",
    singlePrice: "15 € / h",
    packagePrice: "10 lezioni - 145 €",
    description: "Solide fondamenta per chi muove i primi passi."
  }, {
    id: 2,
    title: "ELEMENTARY",
    singlePrice: "17 € / h",
    packagePrice: "10 lezioni - 165 €",
    description: "Sicurezza nelle conversazioni di tutti i giorni."
  },
  {
    id: 3,
    title: "INTERMEDIATE",
    singlePrice: "20 € / h",
    packagePrice: "10 lezioni - 190 €",
    description: "Autonomia e fluidità per viaggiare o lavorare."
  },
  {
    id: 4,
    title: "UPPER INTERMEDIATE",
    singlePrice: "25 € / h",
    packagePrice: "10 lezioni - 240 €",
    description: "Competenza avanzata e sicurezza professionale."
  }];


  return (
    <div className='pricing-modern-section' id="scrollspyHeading4">
      <div className="pricing-title">
        <h2>Scegli il percorso adatto a te</h2>
      </div>
      <p className='pricing-subtitle'>Confronta le opzioni con il tuo livello</p>
      <div className="pricing-grid" >
        {packages.map((plan) => (
          <div key={plan.id} className="pricing-card">
            <h3>{plan.title}</h3>
            <span>{plan.singlePrice}</span>
            <span>{plan.packagePrice}</span>
            <p>{plan.description}</p>
          </div>
        ))}
      </div>
      <a className="btn-whatsapp" style={{ margin: '24px auto 0', maxWidth: '350px', justifyContent: 'center', textAlign: 'center' }} href="https://wa.me/393472912530?text=Ciao%20Chezia%2C%20vorrei%20prenotare%20il%20primo%20incontro%20gratuito.">
        Prenota il primo incontro gratuito
      </a>
    </div>
  )
}

export default Pricing


