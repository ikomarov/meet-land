import React from 'react';
import './index.css';

const HowItWorks: React.FC = () => {
  return (
    <div className="how-it-works-container">
      <h2 className="how-it-works-title">Ваш путь к любви</h2>
      <p className="how-it-works-description">
        Пошаговое руководство о том, как пользоваться приложением, от регистрации до настройки профиля и поиска партнеров.
      </p>
      <div className="cards">
        <div className="card">
          <img
            src={"30.jpeg"}
            alt="Meet steps 1"
          />
          <div className="card-content">
            <h3>Регистрация</h3>
            <p>Создайте свой профиль, заполнив основную информацию о себе.</p>
          </div>
        </div>
        <div className="card">
          <img
            src={"46.jpeg"}
            alt="Meet steps 2"
          />
          <div className="card-content">
            <h3>Настройка Профиля</h3>
            <p>Добавьте фотографии и интересы, чтобы привлечь внимание.</p>
          </div>
        </div>
        <div className="card">
          <img
            src={"55.jpeg"}
            alt="Meet steps 3"
          />
          <div className="card-content">
            <h3>Поиск Партнеров</h3>
            <p>Используйте фильтры для поиска идеального партнера.</p>
          </div>
        </div>
        <div className="card">
          <img
            src={"51.jpeg"}
            alt="Meet steps 3"
          />
          <div className="card-content">
            <h3>Общение</h3>
            <p>Начните общение с понравившимися пользователями.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
