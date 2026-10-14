const Pricing = () => {
  const plans = [
    { id: 'basic', title: 'Basic', hourlyPrice: 15, packagePrice: 145, description: 'Solide fondamenta per chi muove i primi passi.' },
    { id: 'elementary', title: 'Elementary', hourlyPrice: 17, packagePrice: 165, description: 'Sicurezza nelle conversazioni di tutti i giorni.' },
    { id: 'intermediate', title: 'Intermediate', hourlyPrice: 20, packagePrice: 190, description: 'Autonomia e fluidità per viaggiare o lavorare.' },
    { id: 'upper-intermediate', title: 'Upper Intermediate', hourlyPrice: 25, packagePrice: 240, description: 'Competenza avanzata e sicurezza professionale.' }
  ];

  return (
    <section className="pricing-modern-section" id="scrollspyHeading4" aria-labelledby="pricing-heading">
      <div className="pricing-title">
        <h2 id="pricing-heading">Lezioni e pacchetti</h2>
      </div>
      <p className="pricing-subtitle" style={{ fontWeight: 400, fontSize: '1.05rem' }}>Le tariffe, in base al tuo livello di inglese.</p>
      <div className="pricing-grid">
        {plans.map((plan) => (
          <article key={plan.id} className="pricing-card" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', gap: '20px' }}>
            <div>
              <h3 style={{ marginBottom: '12px' }}>{plan.title}</h3>
              <p className="pricing-description" style={{ fontStyle: 'normal', fontSize: '0.95rem', marginBottom: 0 }}>{plan.description}</p>
            </div>
            <div style={{ marginTop: 'auto' }}>
              <p style={{ fontSize: '0.85rem', marginBottom: '6px' }}>Tariffa oraria</p>
              <p style={{ marginBottom: 0, lineHeight: 1.2 }}>
                <strong style={{ fontSize: '2rem', fontWeight: 650, whiteSpace: 'nowrap' }}>{plan.hourlyPrice} €</strong>
                <span style={{ fontSize: '0.95rem' }}> / ora</span>
              </p>
            </div>
            <div style={{ borderTop: '1px solid rgba(19,70,71,0.2)', paddingTop: '20px' }}>
              <p style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px' }}>Pacchetto da 10 lezioni</p>
              <p style={{ marginBottom: 0, lineHeight: 1.3 }}>
                <strong style={{ fontSize: '1.5rem', fontWeight: 650, whiteSpace: 'nowrap' }}>{plan.packagePrice} €</strong>
                <span style={{ fontSize: '0.85rem' }}> totali</span>
              </p>
            </div>
          </article>
        ))}
      </div>
      <div style={{ color: '#DADBD5', maxWidth: '680px', margin: '28px auto 0', lineHeight: 1.7 }}>
        <p style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px' }}>Non sai quale livello scegliere? Lo valutiamo durante il primo incontro.</p>
        <p style={{ fontSize: '0.95rem', marginBottom: 0 }}>Scrivimi per conoscere la durata delle lezioni, le modalità individuali o di gruppo e i dettagli del pacchetto.</p>
      </div>
      <a className="btn-whatsapp" style={{ margin: '24px auto 0', maxWidth: '350px', justifyContent: 'center', textAlign: 'center' }} href="https://wa.me/393472912530?text=Ciao%20Chezia%2C%20vorrei%20prenotare%20il%20primo%20incontro%20gratuito.">
        Prenota il primo incontro gratuito
      </a>
    </section>
  );
};

export default Pricing;
