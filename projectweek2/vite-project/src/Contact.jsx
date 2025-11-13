import './css/App.css'

export default function Contact() {
  return (
    <main className="layout" role="main">
      <div></div>
      
      <article className="main">
        <section className="hero">
          <h1>Contact</h1>
          <p className="lead">
            Heb je vragen of wil je meer informatie? Neem contact met ons op. We helpen je graag verder!
          </p>
        </section>

        <section className="card">
          <h2>Contactgegevens</h2>
          <div style={{ marginBottom: '24px' }}>
            <h3>Bezoekadres</h3>
            <p>
              Heyendaalseweg 98<br />
              6525 AJ Nijmegen
            </p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3>Algemeen</h3>
            <p>
              <strong>Telefoon:</strong> <a href="tel:0243790000" style={{ color: '#6b5dd3' }}>024 379 00 00</a><br />
              <strong>Email:</strong> <a href="mailto:info@roc-nijmegen.nl" style={{ color: '#6b5dd3' }}>info@roc-nijmegen.nl</a>
            </p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3>Openingstijden</h3>
            <p>
              Maandag t/m vrijdag: 08:00 - 17:00 uur<br />
              Zaterdag en zondag: Gesloten
            </p>
          </div>
        </section>

        <section className="card">
          <h2>Stuur ons een bericht</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#1f2333' }}>Naam</label>
              <input 
                type="text" 
                placeholder="Jouw naam"
                style={{ 
                  width: '100%', 
                  padding: '12px 16px', 
                  borderRadius: '8px', 
                  border: '2px solid #e8e9f2',
                  fontSize: '15px',
                  fontFamily: 'Montserrat, sans-serif'
                }} 
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#1f2333' }}>Email</label>
              <input 
                type="email" 
                placeholder="jouw@email.nl"
                style={{ 
                  width: '100%', 
                  padding: '12px 16px', 
                  borderRadius: '8px', 
                  border: '2px solid #e8e9f2',
                  fontSize: '15px',
                  fontFamily: 'Montserrat, sans-serif'
                }} 
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#1f2333' }}>Onderwerp</label>
              <input 
                type="text" 
                placeholder="Waar gaat je vraag over?"
                style={{ 
                  width: '100%', 
                  padding: '12px 16px', 
                  borderRadius: '8px', 
                  border: '2px solid #e8e9f2',
                  fontSize: '15px',
                  fontFamily: 'Montserrat, sans-serif'
                }} 
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#1f2333' }}>Bericht</label>
              <textarea 
                rows="6"
                placeholder="Je bericht..."
                style={{ 
                  width: '100%', 
                  padding: '12px 16px', 
                  borderRadius: '8px', 
                  border: '2px solid #e8e9f2',
                  fontSize: '15px',
                  fontFamily: 'Montserrat, sans-serif',
                  resize: 'vertical'
                }} 
              />
            </div>

            <button 
              type="submit" 
              className="btn primary"
              style={{ alignSelf: 'flex-start' }}
            >
              Verstuur bericht
            </button>
          </form>
        </section>
      </article>

      <div></div>
    </main>
  )
}
