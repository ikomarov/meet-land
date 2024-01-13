import React from 'react';
import './index.css';
import Link from "next/link";

const BlogHeader= ({title, description}: {title: string, description?: string}) => {
  return (
    <>
        <div className="top-bar">
            <span className="brand-name">Meet</span>
            <div>
              <Link className="news-link blog-link" href="/">На главную</Link>
              <Link target="_blank" className="download-button" href="https://t.me/meet_met_bot?start=landingMainHeader">
                  Начать общение
              </Link>
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
