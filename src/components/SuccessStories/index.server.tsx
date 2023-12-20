import React from 'react';
import './index.css';

const SuccessStories: React.FC = () => {
  return (
    <div className="success-stories-container">
      <h2 className="success-stories-title">Истории любви с Meet</h2>
      <div className="stories">
        <div className="story">
          <h3>Анна и Максим</h3>
          <p>Встретились на Meet и с тех пор не расстаются...</p>
        </div>
        <div className="story">
          <h3>Ольга и Игорь</h3>
          <p>Их история началась с простого Привет в Meet...</p>
        </div>
        <div className="story">
          <h3>Елена и Антон</h3>
          <p>Спонтанное свидание, организованное через Meet, привело к волшебному вечеру...</p>
        </div>
        <div className="story">
          <h3>Дмитрий и Катя</h3>
          <p>Общие интересы в Meet привели к построению крепких отношений...</p>
        </div>
        <div className="story">
          <h3>София и Алексей</h3>
          <p>Их любовь расцвела с первого сообщения в Meet и продолжает крепнуть каждый день...</p>
        </div>
        <div className="story">
          <h3>Николай и Марина</h3>
          <p>После нескольких месяцев переписки в Meet, они наконец встретились и поняли, что это судьба...</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
