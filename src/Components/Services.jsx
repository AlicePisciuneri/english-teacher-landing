const Services = () => {
  const paths = [
    {
      id: 'supporto-scolastico',
      title: 'Supporto scolastico',
      audience: 'Per studenti delle scuole medie e superiori che hanno bisogno di aiuto con lo studio o vogliono rafforzare il proprio inglese.',
      activities: ['Aiuto con i compiti e comprensione degli argomenti affrontati in classe.', 'Recupero delle lacune e consolidamento di grammatica e vocabolario.', 'Esercizi di comprensione e conversazione per affrontare lo studio con più sicurezza.'],
      start: 'Nel primo incontro gratuito parliamo delle difficoltà e degli obiettivi scolastici.',
      message: 'Ciao Chezia, vorrei prenotare il primo incontro gratuito per il supporto scolastico.'
    },
    {
      id: 'inglese-adulti',
      title: 'Inglese per adulti',
      audience: 'Per chi vuole iniziare, riprendere lo studio o sentirsi più sicuro quando usa l’inglese nella vita quotidiana, in viaggio o al lavoro.',
      activities: ['Conversazione e ascolto su situazioni concrete.', 'Vocabolario, pronuncia e grammatica in base al livello di partenza.', 'Lettura e scrittura per sviluppare competenze utili ai propri obiettivi.'],
      start: 'Nel primo incontro gratuito definiamo da dove parti e in quali situazioni vuoi usare l’inglese.',
      message: 'Ciao Chezia, vorrei prenotare il primo incontro gratuito per le lezioni di inglese per adulti.'
    },
    {
      id: 'bambini-ragazzi',
      title: 'Lezioni per bambini e ragazzi',
      audience: 'Per chi si avvicina all’inglese o desidera coltivarlo anche oltre il programma scolastico, con attività adatte all’età e al livello.',
      activities: ['Attività coinvolgenti per scoprire e ampliare il vocabolario.', 'Ascolto, pronuncia e prime conversazioni, secondo il livello.', 'Esercizi guidati per acquisire familiarità con la lingua e fiducia nelle proprie capacità.'],
      start: 'Nel primo incontro gratuito ci confrontiamo con il genitore su esigenze, interessi e obiettivi.',
      message: 'Ciao Chezia, vorrei informazioni sul primo incontro gratuito per le lezioni dedicate a bambini e ragazzi.'
    }
  ];

  return (
    <section className="services-modern-section" aria-labelledby="services-heading">
      <div className="services-title">
        <h2 id="services-heading">Scegli il percorso per te</h2>
      </div>
      <p style={{ color: '#DADBD5', maxWidth: '650px', margin: '0 auto', lineHeight: 1.7 }}>
        Tre modi per iniziare, con lezioni adatte al tuo livello e alle competenze che vuoi sviluppare.
      </p>
      <div className="services-grid">
        {paths.map((path) => (
          <article key={path.id} className="services-card" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', gap: '16px' }}>
            <h3 style={{ marginBottom: 0 }}>{path.title}</h3>
            <p style={{ marginBottom: 0, lineHeight: 1.7 }}>{path.audience}</p>
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 650 }}>Su cosa lavoriamo</h4>
              <ul style={{ paddingLeft: '20px', marginBottom: 0, lineHeight: 1.7 }}>
                {path.activities.map((activity) => <li key={activity} style={{ marginBottom: '8px' }}>{activity}</li>)}
              </ul>
            </div>
            <div style={{ marginTop: 'auto' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 650 }}>Come iniziare</h4>
              <p style={{ lineHeight: 1.7 }}>{path.start}</p>
              <a className="btn-hero" style={{ maxWidth: '100%' }} href={`https://wa.me/393472912530?text=${encodeURIComponent(path.message)}`}>
                Prenota il primo incontro gratuito
              </a>
            </div>
          </article>
        ))}
      </div>
      <div style={{ maxWidth: '800px', margin: '28px auto 0', color: '#DADBD5', lineHeight: 1.75 }}>
        <h3 style={{ fontSize: '1.3rem', fontWeight: 650 }}>Come si svolgono le lezioni</h3>
        <p style={{ marginBottom: 0 }}>
          Tutte le lezioni si svolgono online, individualmente o in gruppo. Livello, attività, frequenza e obiettivi vengono concordati in base alle esigenze dello studente e alla disponibilità. Il primo incontro conoscitivo è gratuito.
        </p>
      </div>
    </section>
  );
};

export default Services;
