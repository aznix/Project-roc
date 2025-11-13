import { useState } from 'react'
import './css/App.css'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      question: "Is er nog plaats op deze opleiding?",
      answer: "Ja, er is nog plaats! Heb je interesse in deze opleiding? Meld je dan nu aan."
    },
    {
      question: "Wat zijn de toelatingseisen?",
      answer: "Vmbo: diploma kader, gemengd, theoretisch of mavo. Havo/vwo: overgang 3→4. Mbo: minimaal niveau 2 of 3, afhankelijk van de opleiding."
    },
    {
      question: "Hoe zit het met stage of werken?",
      answer: "Tijdens je stages krijg je een bedrijfsmentor en ervaar je wat er gebeurt in een bedrijf; zo ontdek je je kwaliteiten en interesses."
    },
    {
      question: "Wat kost deze opleiding?",
      answer: "Lesgeld: € 1458,- per jaar. Bijkomende kosten: ± € 300 in leerjaar 1 en ± € 100 in volgende leerjaren (indicatief)."
    }
  ]

  return (
    <section id="faq" className="card">
      <h2>Vragen en antwoorden</h2>

      {faqs.map((faq, index) => (
        <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
          <div className="faq-question" onClick={() => toggleFaq(index)}>
            {faq.question}
            <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
          </div>
          <div className="faq-answer">
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
