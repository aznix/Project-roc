import './css/App.css'

export default function Sidebar() {
  return (
    <aside className="aside" aria-label="Agenda en contact">
      <section id="open-dagen" className="card">
        <h2>Open dagen</h2>
        <ul className="list">
          <li>
            <strong>06 feb '26</strong> · 16:00 – 20:00 — Open Dag mbo
          </li>
          <li>
            <strong>27 mrt '26</strong> · 16:00 – 18:00 — Open Dag mbo
          </li>
          <li>
            <strong>16 jun '26</strong> · 18:00 – 20:00 — Info‑avond mbo
          </li>
        </ul>
      </section>

      <section className="card">
        <h2>Events</h2>
        <ul className="list">
          <li>
            <strong>13 nov '25</strong> · 19:30 – 20:30 — Voorlichting voor ouders/verzorgers
          </li>
        </ul>
      </section>

      <section id="vraag" className="card">
        <h2>Stel een vraag</h2>
        <ul className="list">
          <li>
            <a href="#">De voorlichter — Vragen over deze opleiding</a>
          </li>
          <li>
            <a href="#">Studiekeuzeadviseurs — Algemene vragen en hulp</a>
          </li>
        </ul>
      </section>
    </aside>
  )
}
