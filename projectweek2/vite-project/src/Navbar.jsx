import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import './css/Navbar.css'
import logo from './assets/roclogo.svg'

export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return(
        <header className="navbar-header">
            <nav className="navbar-main">
                <div className="navbar-container">
                    <div className="navbar-left">
                        <Link to="/" onClick={closeMenu}>
                            <img className="nav-logo" src={logo} alt="ROC logo" />
                        </Link>
                    </div>
                    
                    <div className={`navbar-center ${isMenuOpen ? 'active' : ''}`}>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
                            Contact
                        </NavLink>
                        <NavLink to="/over-ons" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
                            Over ons
                        </NavLink>
                        <NavLink to="/bedrijven" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
                            Bedrijven
                        </NavLink>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
                            Software Developer
                        </NavLink>
                    </div>
                    
                    <div className="navbar-right">
                        <NavLink to="/login" className="nav-cta" onClick={closeMenu}>Mijn ROC</NavLink>
                        <button 
                            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}