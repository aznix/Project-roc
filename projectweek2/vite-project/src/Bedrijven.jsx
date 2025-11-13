import './css/App.css'

export default function Bedrijven() {
  return (
    <main className="layout" role="main">
      <div></div>
      
      <article className="main">
        <section className="hero">
          <h1>Bedrijven</h1>
          <p className="lead">
            Welkom bedrijven! ROC Nijmegen werkt graag samen met het bedrijfsleven. Ontdek de mogelijkheden voor stages, leerbanen en partnerships.
          </p>
        </section>

        <section className="card">
          <h2>Samenwerking met ROC Nijmegen</h2>
          <p>
            Als bedrijf kunt u op verschillende manieren samenwerken met ROC Nijmegen. Van het aanbieden van stageplaatsen tot het ontwikkelen van maatwerk opleidingen samen met onze docenten.
          </p>
        </section>

        <section className="card">
          <h2>Wat kunnen wij voor u betekenen?</h2>
          <ul className="checks">
            <li>Gemotiveerde en goed opgeleide stagiairs</li>
            <li>BOL-leerlingen (beroepsopleidende leerweg)</li>
            <li>Maatwerk bedrijfsopleidingen</li>
            <li>Kennisdeling en gastlessen</li>
            <li>Toegang tot jong talent</li>
            <li>Praktijkgerichte projecten</li>
          </ul>
        </section>

        <section className="card">
          <h2>Stageplekken & Leerbanen</h2>
          <p>
            Bent u op zoek naar gemotiveerde medewerkers of stagiairs? Onze studenten zijn opgeleid in diverse vakgebieden en klaar om hun kennis in de praktijk te brengen.
          </p>
          <h3>Voordelen van een stagiair</h3>
          <ul className="bullets">
            <li>Frisse blik en nieuwe ideeën</li>
            <li>Actuele kennis en vaardigheden</li>
            <li>Enthousiasme en leergierigheid</li>
            <li>Mogelijk toekomstig talent voor uw organisatie</li>
          </ul>
        </section>

        <section className="card">
          <h2>Onze partners</h2>
          <p>
            ROC Nijmegen werkt samen met meer dan 500 bedrijven in de regio. Van mkb tot multinationals, we waarderen elke samenwerking.
          </p>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '20px',
            marginTop: '24px',
            padding: '24px',
            background: '#f8f8ff',
            borderRadius: '12px'
          }}>
            <div style={{ textAlign: 'center', color: '#6b5dd3', fontWeight: '600' }}>500+<br/>Partners</div>
            <div style={{ textAlign: 'center', color: '#6b5dd3', fontWeight: '600' }}>1200+<br/>Stageplaatsen</div>
            <div style={{ textAlign: 'center', color: '#6b5dd3', fontWeight: '600' }}>300+<br/>BOL-plekken</div>
          </div>
        </section>

        <section className="cta card">
          <h2>Interesse in samenwerking?</h2>
          <div className="cta-actions">
            <a className="btn primary" href="#contact">Neem contact op</a>
            <a className="btn ghost" href="#info">Meer informatie</a>
          </div>
        </section>
      </article>

      <div></div>
    </main>
  )
}
