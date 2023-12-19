import React from 'react';
import "./index.css"

const Footer = () => {
  return (
    <div className="footer-cta-container">
      <a target="_blank" className="news-link" href="https://t.me/meet_news_ru">Новости Meet</a>
      <br />
      <p className="footer-cta-about">© Meet 2024</p>
      <a target="_blank" className="terms-link" href="https://lovemeetmet.space/user-agreement-offer-ru.html">
        Пользовательское соглашение
      </a>
    </div>
  );
};

export default Footer;
