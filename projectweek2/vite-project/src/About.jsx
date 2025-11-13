import './css/App.css'

export default function About() {
  return (
    <>
      <section id="over" className="card">
        <h2>Meer over de opleiding</h2>
        <p>
          Tijdens de opleiding staan ontwerpen, bouwen, testen en beveiligen van software centraal; aan het einde kun je zelfstandig én in teamverband complete toepassingen opleveren. Moderne programmeertalen, database‑ontwerp en software‑security komen uitgebreid aan bod, gekoppeld aan praktijkprojecten met bedrijven. Ook samenwerken en communiceren met klanten krijgt veel aandacht.
        </p>
        <p>
          In het tweede jaar volgt een stage bij een erkend leerbedrijf.
        </p>
      </section>

      <section id="vakken" className="card">
        <h2>Welke vakken krijg je?</h2>
        <ul className="bullets">
          <li>Systeemontwerp en realisatie</li>
          <li>Programmeer­vakken</li>
          <li>Nederlands, Engels, rekenen en burgerschap</li>
          <li>Keuzedelen voor verdieping</li>
        </ul>
      </section>

      <section id="past" className="card">
        <h2>Past het beroep bij mij?</h2>
        <ul className="checks">
          <li>Je bent een teamplayer met een eigen stijl</li>
          <li>Je houdt van puzzelen en slimme oplossingen</li>
          <li>Je kunt logisch en abstract denken</li>
          <li>Je werkt je idee uit tot een werkend product</li>
        </ul>
      </section>
    </>
  )
}
