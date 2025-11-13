import { Link } from 'react-router-dom'
import './css/App.css'

export default function CTA() {
  return (
    <section id="aanmelden" className="cta card">
      <h2>Aanmelden voor de opleiding Software developer</h2>
      <div className="cta-actions">
        <Link to="/login" className="btn primary">Meld je aan</Link>
        <Link to="/contact" className="btn ghost">Hulp nodig?</Link>
        <Link to="/voorwaarden" className="btn ghost">Voorwaarden</Link>
      </div>
    </section>
  )
}
