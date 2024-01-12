import React from 'react';
import './index.css';

const BlogHeader: React.FC = () => {
  return (
    <>
      <div className="top-bar">
        <span className="brand-name">Meet</span>
        <div>
          <a target="_blank" className="download-button" href="https://t.me/meet_met_bot?start=landingMainHeader">
            Начать общение
          </a>
        </div>
      </div>
      <div className="header-blog">
        <div className="header-content">
          <h1 className="title">Наш блог</h1>
          <p className="description">
            Место, где наши редакторы делятся своими мыслями
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogHeader;
