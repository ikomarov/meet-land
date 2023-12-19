import React from 'react';
import './index.css';

const MainHeader: React.FC = () => {
  return (
    <>
      <div className="top-bar">
        <span className="brand-name">Meet</span>
        <a className="download-button" href="https://t.me/meet_met_bot?start=landingMainHeader">Начать знакомиться</a>
      </div>
      <div className="header">
        <div className="header-content">
          <h1 className="title">Meet - Найди свою Любовь</h1>
          <p className="description">
            Встречайте приложение "Meet", где каждый может найти свою вторую половинку...
          </p>
          <div className="button-go-block">
            <a className="download-button go" href="https://t.me/meet_met_bot?start=landingMainHeaderGo">Перейти</a>
          </div>
        </div>
        <div className="header-image">
          <img
            width={600}
            src={"meet-main.png"}
            alt="Meet App"
          />
        </div>
      </div>
    </>
  );
};

export default MainHeader;
