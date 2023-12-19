'use client'
import React, { useState } from 'react';
import './index.css';
import {faqs} from "../../consts/faqs";

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">У вас есть вопросы? У нас есть ответы!</h2>
      <div className="faq-content">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <svg className={`arrow-icon ${activeIndex === index ? 'flipped' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3.41 5.3A1 1 0 0 0 2 6.7L7.3 12a1 1 0 0 0 1.4 0L14 6.7a1 1 0 0 0-1.41-1.4L8.35 9.52a.5.5 0 0 1-.7 0L3.4 5.29z"/>
              </svg>
            </div>
            <div className="faq-answer">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
