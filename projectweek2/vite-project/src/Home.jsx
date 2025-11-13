import Quicklinks from './Quicklinks'
import Hero from './Hero'
import About from './About'
import CTA from './CTA'
import AfterStudy from './AfterStudy'
import FAQ from './FAQ'
import Sidebar from './Sidebar'
import StatsCounter from './StatsCounter'
import './css/App.css'

export default function Home() {
  return (
    <>
      <main id="content" className="layout" role="main">
        <Quicklinks />

        <article className="main">
          <Hero />
          <About />
          <CTA />
          <AfterStudy />
          <FAQ />
        </article>

        <Sidebar />
      </main>
      
      <StatsCounter />
    </>
  )
}
