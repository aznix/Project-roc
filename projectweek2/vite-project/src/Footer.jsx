import { Link } from 'react-router-dom'
import './css/App.css'

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-section">
          <h3>ROC Nijmegen</h3>
          <p>
            Heyendaalseweg 98, 6525 AJ Nijmegen<br />
            Telefoon: <a href="tel:0243790790">024 379 0790</a><br />
            Email: <a href="mailto:info@roc-nijmegen.nl">info@roc-nijmegen.nl</a>
          </p>
        </div>

        <div className="footer-section">
          <h3>Navigatie</h3>
          <ul>
            <li><Link to="/">Thuis</Link></li>
            <li><Link to="/over-ons">Over Ons</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/bedrijven">Voor Bedrijven</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Informatie</h3>
          <ul>
            <li><a href="#">Open Dagen</a></li>
            <li><a href="#">Veelgestelde Vragen</a></li>
            <li><a href="#">Aanmelden</a></li>
            <li><a href="#">Privacy Beleid</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 ROC Nijmegen · Alle rechten voorbehouden</p>
      </div>
    </footer>
  )
}
