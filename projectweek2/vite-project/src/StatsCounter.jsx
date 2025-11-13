import { useEffect, useRef, useState } from 'react'
import './css/StatsCounter.css'

export default function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({
    students: 0,
    programs: 0,
    partners: 0,
    success: 0
  })
  const statsRef = useRef(null)

  const targetValues = {
    students: 9452,
    programs: 150,
    partners: 1000,
    success: 92
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const interval = duration / steps

    const incrementValues = {
      students: targetValues.students / steps,
      programs: targetValues.programs / steps,
      partners: targetValues.partners / steps,
      success: targetValues.success / steps
    }

    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      
      setCounts({
        students: Math.min(Math.floor(incrementValues.students * currentStep), targetValues.students),
        programs: Math.min(Math.floor(incrementValues.programs * currentStep), targetValues.programs),
        partners: Math.min(Math.floor(incrementValues.partners * currentStep), targetValues.partners),
        success: Math.min(Math.floor(incrementValues.success * currentStep), targetValues.success)
      })

      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [isVisible])

  return (
    <section className="stats-section" ref={statsRef}>
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
        <div className="shape shape-6"></div>
      </div>
      
      <div className="stats-container">
        <h2>ROC Nijmegen in cijfers</h2>
        <p className="stats-subtitle">Samen bouwen we aan jouw toekomst</p>
        
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-graph">
              <svg viewBox="0 0 200 200" className="circular-graph">
                <circle cx="100" cy="100" r="90" className="graph-bg" />
                <circle 
                  cx="100" 
                  cy="100" 
                  r="90" 
                  className="graph-progress"
                  style={{
                    strokeDasharray: `${(counts.students / targetValues.students) * 565} 565`
                  }}
                />
              </svg>
              <div className="stat-number">{counts.students.toLocaleString()}</div>
            </div>
            <h3>Studenten</h3>
            <p>Actieve studenten bij ROC Nijmegen</p>
          </div>

          <div className="stat-card">
            <div className="stat-graph">
              <svg viewBox="0 0 200 200" className="circular-graph">
                <circle cx="100" cy="100" r="90" className="graph-bg" />
                <circle 
                  cx="100" 
                  cy="100" 
                  r="90" 
                  className="graph-progress graph-progress-2"
                  style={{
                    strokeDasharray: `${(counts.programs / targetValues.programs) * 565} 565`
                  }}
                />
              </svg>
              <div className="stat-number">{counts.programs}+</div>
            </div>
            <h3>Opleidingen</h3>
            <p>Verschillende MBO-opleidingen</p>
          </div>

          <div className="stat-card">
            <div className="stat-graph">
              <svg viewBox="0 0 200 200" className="circular-graph">
                <circle cx="100" cy="100" r="90" className="graph-bg" />
                <circle 
                  cx="100" 
                  cy="100" 
                  r="90" 
                  className="graph-progress graph-progress-3"
                  style={{
                    strokeDasharray: `${(counts.partners / targetValues.partners) * 565} 565`
                  }}
                />
              </svg>
              <div className="stat-number">{counts.partners}+</div>
            </div>
            <h3>Bedrijfspartners</h3>
            <p>Samenwerkingen voor stages</p>
          </div>

          <div className="stat-card">
            <div className="stat-graph">
              <svg viewBox="0 0 200 200" className="circular-graph">
                <circle cx="100" cy="100" r="90" className="graph-bg" />
                <circle 
                  cx="100" 
                  cy="100" 
                  r="90" 
                  className="graph-progress graph-progress-4"
                  style={{
                    strokeDasharray: `${(counts.success / targetValues.success) * 565} 565`
                  }}
                />
              </svg>
              <div className="stat-number">{counts.success}%</div>
            </div>
            <h3>Succesvol afgestudeerd</h3>
            <p>Diploma behaald binnen 4 jaar</p>
          </div>
        </div>
      </div>
    </section>
  )
}
