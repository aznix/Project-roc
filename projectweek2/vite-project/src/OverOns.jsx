import './css/App.css'

export default function OverOns() {
  return (
    <main className="layout" role="main">
      <div></div>
      
      <article className="main">
        <section className="hero">
          <h1>Over ROC Nijmegen</h1>
          <p className="lead">
            ROC Nijmegen is een regionale instelling voor middelbaar beroepsonderwijs en volwasseneneducatie in de regio Nijmegen. Wij bieden een breed scala aan opleidingen.
          </p>
        </section>

        <section className="card">
          <h2>Onze missie</h2>
          <p>
            Bij ROC Nijmegen staan studenten centraal. Wij geloven in persoonlijke ontwikkeling en het begeleiden van iedereen naar een succesvol vervolg in hun carrière of vervolgonderwijs. Met moderne faciliteiten en betrokken docenten creëren we een inspirerende leeromgeving.
          </p>
        </section>

        <section className="card">
          <h2>Wat maakt ons bijzonder?</h2>
          <ul className="checks">
            <li>Moderne faciliteiten en actuele leermiddelen</li>
            <li>Kleine klassen voor persoonlijke aandacht</li>
            <li>Sterke connecties met het bedrijfsleven</li>
            <li>Uitgebreid stageplaatsenaanbod</li>
            <li>Ervaren en betrokken docenten</li>
            <li>Centraal gelegen in Nijmegen</li>
          </ul>
        </section>

        <section className="card">
          <h2>Onze opleidingen</h2>
          <p>
            ROC Nijmegen biedt opleidingen op verschillende niveaus (niveau 1 t/m 4) in diverse sectoren:
          </p>
          <ul className="bullets">
            <li>ICT & Media</li>
            <li>Zorg & Welzijn</li>
            <li>Techniek & Bouw</li>
            <li>Economie & Handel</li>
            <li>Horeca & Bakkerij</li>
            <li>Sport & Bewegen</li>
          </ul>
        </section>

        <section className="card">
          <h2>Onze waarden</h2>
          <div style={{ display: 'grid', gap: '20px' }}>
            <div>
              <h3>Vakmanschap</h3>
              <p>We streven naar excellentie in alles wat we doen en bereiden studenten voor op de arbeidsmarkt.</p>
            </div>
            <div>
              <h3>Verbinding</h3>
              <p>We werken nauw samen met bedrijven en instellingen voor relevante en actuele opleidingen.</p>
            </div>
            <div>
              <h3>Persoonlijk</h3>
              <p>Elke student is uniek. We bieden maatwerk en persoonlijke begeleiding.</p>
            </div>
          </div>
        </section>

        <section className="cta card">
          <h2>Meer weten?</h2>
          <div className="cta-actions">
            <a className="btn primary" href="#contact">Neem contact op</a>
            <a className="btn ghost" href="#open-dagen">Kom naar een open dag</a>
          </div>
        </section>
      </article>

      <div></div>
    </main>
  )
}
