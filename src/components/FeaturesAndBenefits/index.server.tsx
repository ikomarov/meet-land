import React from 'react';
import './index.css';

const FeaturesAndBenefits: React.FC = () => {
  return (
    <div className="features-container">
      <h2 className="features-title">Почему Meet?</h2>
      <p className="features-description">
        Откройте для себя уникальные возможности приложения "Meet", которое
        предлагает удобный и безопасный способ знакомства и общения.
      </p>
      <div className="features-list">
        <div className="feature-item">
          <h3>Интеграция с Telegram</h3>
          <p>Инновационный подход к общению. Если у вас совпадение, вы можете перейти в чат телеграм для общения</p>
        </div>
        <div className="feature-item">
          <h3>Безопасность</h3>
          <p>Ваши данные в безопасности благодаря передовым технологиям. Данные шифруются и защищены на уровне Telegram.</p>
        </div>
        <div className="feature-item">
          <h3>Легкость</h3>
          <p>Интуитивно понятный интерфейс делает поиск пары простым и увлекательным.</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesAndBenefits;
