import React from 'react';
import './index.css';

const SecurityAndPrivacy: React.FC = () => {
  return (
    <div className="security-and-privacy-container">
      <h2 className="security-and-privacy-title">Ваша Безопасность - Наш Приоритет</h2>
      <p className="security-and-privacy-description">
        Мы серьезно относимся к вопросам безопасности и конфиденциальности данных наших пользователей. В приложении "Meet" применяются передовые методы защиты личной информации, чтобы вы могли чувствовать себя уверенно и защищенно.
      </p>
      {/* Здесь можно добавить дополнительные элементы, например, список мер безопасности */}
    </div>
  );
};

export default SecurityAndPrivacy;
