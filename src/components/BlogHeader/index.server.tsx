import React from 'react';
import './index.css';

const BlogHeader= ({title, description}: {title: string, description?: string}) => {
  return (
    <>
        <div className="top-bar">
            <span className="brand-name">Meet</span>
            <div>
              <a className="news-link blog-link" href="/">На главную</a>
              <a target="_blank" className="download-button" href="https://t.me/meet_met_bot?start=landingMainHeader">
                  Начать общение
              </a>
            </div>
        </div>
        <div className="header-blog">
            <div className="header-content">
              <h1 className="title">{title}</h1>
                {
                    description && (<p className="description">
                        {description}
                    </p>)
                }
            </div>
        </div>
    </>
  );
};

export default BlogHeader;
