import { useState, useEffect } from 'react'
import './css/App.css'

export default function Quicklinks() {
  const [activeSection, setActiveSection] = useState('beeld')

  useEffect(() => {
    const sections = [
      'beeld',
      'vakken',
      'past',
      'na',
      'faq'
    ]

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      let currentSection = sections[0] // Default to first section

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop } = element
          if (scrollPosition >= offsetTop) {
            currentSection = sectionId
          }
        }
      })

      setActiveSection(currentSection)
    }

    // Initial check
    handleScroll()

    // Add scroll listener with throttle for better performance
    let ticking = false
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  const handleClick = (e, targetId) => {
    e.preventDefault()
    
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      // Smooth scroll to element with center alignment
      targetElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      })
      
      // Add highlight class
      targetElement.classList.add('highlight-glow')
      
      // Remove highlight after 1 second
      setTimeout(() => {
        targetElement.classList.remove('highlight-glow')
      }, 1000)
    }
  }

  return (
    <nav className="rail" aria-label="Snel naar">
      <ul className="quicklinks">
        <li>
          <a 
            href="#beeld" 
            onClick={(e) => handleClick(e, 'beeld')}
            className={activeSection === 'beeld' ? 'active' : ''}
          >
            Opleiding in beeld
          </a>
        </li>
        <li>
          <a 
            href="#vakken" 
            onClick={(e) => handleClick(e, 'vakken')}
            className={activeSection === 'vakken' ? 'active' : ''}
          >
            Opbouw & vakken
          </a>
        </li>
        <li>
          <a 
            href="#past" 
            onClick={(e) => handleClick(e, 'past')}
            className={activeSection === 'past' ? 'active' : ''}
          >
            Past dit bij mij?
          </a>
        </li>
        <li>
          <a 
            href="#na" 
            onClick={(e) => handleClick(e, 'na')}
            className={activeSection === 'na' ? 'active' : ''}
          >
            Na de opleiding
          </a>
        </li>
        <li>
          <a 
            href="#faq" 
            onClick={(e) => handleClick(e, 'faq')}
            className={activeSection === 'faq' ? 'active' : ''}
          >
            Vragen & antwoorden
          </a>
        </li>
      </ul>
    </nav>
  )
}
