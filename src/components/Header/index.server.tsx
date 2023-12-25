import React from 'react';
import './index.css';
import Image from 'next/image'

const MainHeader: React.FC = () => {
  return (
    <>
      <div className="top-bar">
        <span className="brand-name">Meet</span>
        <a target="_blank" className="download-button" href="https://t.me/meet_met_bot?start=landingMainHeader">
          Начать общение
        </a>
      </div>
      <div className="header">
        <div className="header-content">
          <h1 className="title">Meet - Найди свою Любовь</h1>
          <p className="description">
            Встречайте приложение &quot;Meet&quot;, где каждый может найти свою вторую половинку...
          </p>
          <div className="button-go-block">
            <a target="_blank" className="news-button go" href="https://t.me/meet_news_ru">Новости Meet</a>
            <a target="_blank" className="download-button go" href="https://t.me/meet_met_bot?start=landingMainHeaderGo">Перейти к Meet</a>
          </div>
        </div>
        <div className="header-image">
          <Image
            width={600}
            height={600}
            src="/meet-main.png"
            alt="Meet App"
          />
        </div>
      </div>
    </>
  );
};

export default MainHeader;
