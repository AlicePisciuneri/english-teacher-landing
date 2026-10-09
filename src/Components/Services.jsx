import React from 'react'

const Services = () => {

  const serviceCards = [
    {
      id: 1,
      title: "Lezioni",
      intro: "Un supporto flessibile e mirato per ogni esigenza linguistica, progettato per aiutarti a raggiungere i tuoi obiettivi con sicurezza:",
      items: [
        "Lezioni individuali e di gruppo: Percorsi su misura per un'attenzione esclusiva o dinamiche di apprendimento condivise.",
        "Supporto scolastico e recupero: Aiuto compiti mirato e rafforzamento costante per affrontare la scuola senza stress.",
        "Percorsi personalizzati: Programmi flessibili creati in base al tuo livello e ai tuoi ritmi.",
        "Rafforzamento della lingua: Attività specifiche per migliorare fluidità, pronuncia e sicurezza nell'uso dell'inglese."
      ]
    },
    {
      id: 2,
      title: "A chi sono rivolte",
      intro: "Soluzioni pensate su misura per accompagnare ogni fascia d'età nel proprio percorso di crescita:",
      items: [
        "Bambini: Percorsi ludici e stimolanti, adatti all'età e al primo approccio con la lingua.",
        "Ragazzi e Scuole (Medie e Superiori): Supporto allo studio, recupero scolastico e potenziamento per ottenere risultati brillanti.",
        "Adulti: Lezioni focalizzate sulla conversazione e sull'uso pratico dell'inglese, per lavoro o crescita personale."
      ]
    },
    {
      id: 3,
      title: "Come funzionano",
      intro: "",
      items: [
        "100% Online: Comode, flessibili e accessibili ovunque tu sia.",
        "Su misura:Frequenza e obiettivi concordati in base alla tua disponibilità e alla velocità con cui desideri migliorare."
      ]
    }
  ];


  return (
    <section className="services-modern-section">
      <div className="services-title">
        <h1>SERVIZI</h1>
      </div>
      <div className="services-grid" >
        {serviceCards.map((serviceCard) => (
          <div key={serviceCard.id} className="services-card">
            <h3>{serviceCard.title}</h3>
            <div className="services-description">
              {serviceCard.intro && <p>{serviceCard.intro}</p>}
              <ul className="services-list">
                {serviceCard.items.map((item, index) => {
                  const parts = item.split(":");
                  return (
                    <li key={index}>
                      <strong>{parts[0]}:</strong> {parts[1]}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
