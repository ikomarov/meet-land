import React from 'react';
import './index.css';

const ContactUs: React.FC = () => {
  return (
      <div className="contact-us-container">
          <h2 className="contact-us-title">Свяжитесь с нами</h2>
          <p className="contact-us-description">
              Если у вас есть вопросы или предложения, пожалуйста, не стесняйтесь обращаться к нам.
          </p>
          <p className="contact-us-description">
              C нами также можно связаться после регистрации. Просто напиши в чате <b>/report</b>
          </p>
          <div className="contact-details">
              <p><strong>Email: </strong>meet.met.bot@gmail.com</p>
          </div>
          <div className="contact-us-button">
              <a target="_blank" className="download-button go" href="https://t.me/meet_met_bot?start=landingMainAbout">
                  Перейти в чат
              </a>
          </div>
          <div className="sharethis-inline-share-buttons"/>
      </div>
  );
};

export default ContactUs;
