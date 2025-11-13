import './css/App.css'

export default function Login() {
  return (
    <main className="layout" role="main">
      <div></div>
      
      <article className="main">
        <section className="hero">
          <h1>Mijn ROC</h1>
          <p className="lead">
            Log in met je ROC account om toegang te krijgen tot je persoonlijke omgeving.
          </p>
        </section>

        <section className="card" style={{ maxWidth: '500px', margin: '0 auto' }}>
          <h2>Inloggen</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '24px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#1f2333' }}>
                Gebruikersnaam
              </label>
              <input 
                type="text" 
                placeholder="student@roc-nijmegen.nl"
                style={{ 
                  width: '100%', 
                  padding: '14px 16px', 
                  borderRadius: '8px', 
                  border: '2px solid #e8e9f2',
                  fontSize: '15px',
                  fontFamily: 'Montserrat, sans-serif',
                  transition: 'border-color 0.3s ease'
                }} 
                onFocus={(e) => e.target.style.borderColor = '#6b5dd3'}
                onBlur={(e) => e.target.style.borderColor = '#e8e9f2'}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#1f2333' }}>
                Wachtwoord
              </label>
              <input 
                type="password" 
                placeholder="••••••••"
                style={{ 
                  width: '100%', 
                  padding: '14px 16px', 
                  borderRadius: '8px', 
                  border: '2px solid #e8e9f2',
                  fontSize: '15px',
                  fontFamily: 'Montserrat, sans-serif',
                  transition: 'border-color 0.3s ease'
                }} 
                onFocus={(e) => e.target.style.borderColor = '#6b5dd3'}
                onBlur={(e) => e.target.style.borderColor = '#e8e9f2'}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input 
                type="checkbox" 
                id="remember"
                style={{ 
                  width: '18px', 
                  height: '18px', 
                  cursor: 'pointer',
                  accentColor: '#6b5dd3'
                }} 
              />
              <label htmlFor="remember" style={{ fontSize: '14px', color: '#6b6f86', cursor: 'pointer' }}>
                Onthoud mij
              </label>
            </div>

            <button 
              type="submit" 
              className="btn primary"
              style={{ width: '100%', marginTop: '8px' }}
            >
              Inloggen
            </button>
          </form>

          <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid #e8e9f2', textAlign: 'center' }}>
            <a href="#" style={{ color: '#6b5dd3', fontSize: '14px', textDecoration: 'none', fontWeight: '500' }}>
              Wachtwoord vergeten?
            </a>
          </div>
        </section>

        <section className="card" style={{ maxWidth: '500px', margin: '32px auto 0', background: '#f8f8ff' }}>
          <h3 style={{ fontSize: '18px', margin: '0 0 12px 0' }}>Nog geen account?</h3>
          <p style={{ margin: '0 0 16px 0', fontSize: '14px' }}>
            Ben je een nieuwe student? Vraag je inloggegevens aan bij de studieadviseur.
          </p>
          <a className="btn ghost" href="#contact">
            Neem contact op
          </a>
        </section>
      </article>

      <div></div>
    </main>
  )
}
