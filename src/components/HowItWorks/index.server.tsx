import React from 'react';
import Image from 'next/image'
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
          <Image
              width={300}
              height={300}
              src="/301.jpeg"
              alt="Meet step 1"
          />
          <div className="card-content">
            <h3>Регистрация</h3>
            <p>Создайте свой профиль. Нажмите <b>Начать</b> и заполните основную информацию о себе отвечая на вопросы.</p>
          </div>
        </div>
        <div className="card">
          <Image
              width={300}
              height={300}
              src="/461.jpeg"
              alt="Meet step 2 add int"
          />
          <div className="card-content">
            <h3>Настройка профиля</h3>
            <p>Добавьте фотографии и интересы, чтобы привлечь внимание. Наберите в telegram слеш &quot;<b>/</b>&quot; и вы увидите список доступных команд</p>
          </div>
        </div>
        <div className="card">
          <Image
              width={300}
              height={300}
              src="/551.jpeg"
              alt="Meet step 3"
          />
          <div className="card-content">
            <h3>Поиск партнеров</h3>
            <p>Нажмите на <b>Запустить</b> или <b>Open</b> в telegram после регистрации.</p>
          </div>
        </div>
        <div className="card">
          <Image
              width={300}
              height={300}
              src="/12.jpeg"
              alt="Meet step 4"
          />
          <div className="card-content">
            <h3>Общение</h3>
            <p>Вы увидите совпадение на специальной вкладке внутри Meet. Начните общение с понравившимся пользователем <b>просто нажав</b> на него.</p>
          </div>
        </div>
      </div>
      <a target="_blank" className="download-button go" href="https://t.me/meet_met_bot?start=landingHowItWorks">
        Попробовать
      </a>
    </div>
  );
};

export default HowItWorks;
