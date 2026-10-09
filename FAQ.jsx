import React from 'react';
import { useState } from 'react';

const FAQ = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [{
    id: "1",
    question: "Le lezioni si svolgono solo online o anche in presenza?",
    answer: "Le lezioni si tengono principalmente online tramite piattaforme come Zoom o Google Meet..."
  }, {
    id: "2",
    question: "Come posso disdire o spostare una lezione?",
    answer: "Puoi spostare o cancellare una lezione con almeno 24 ore di preavviso..."
  }, {
    id: "3",
    question: "È previsto un test di livello iniziale?",
    answer: "Sì! Prima di iniziare il percorso faremo un breve test conoscitivo gratuito..."
  }];


  return (
    <section className="faq-modern-section" id="scrollspyHeading2">
      <div className="faq-title">
        <h3>FAQ</h3>
      </div>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'open' : ''}`}
            onClick={() => toggleFaq(index)}>
            <div className="faq-question">
              <span>{faq.question}</span>
              <span className='icon'>{activeIndex === index ? '∧' : '∨'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ
