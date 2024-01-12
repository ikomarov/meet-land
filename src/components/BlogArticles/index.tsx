import React from 'react';
import './index.css'; // Путь к вашему CSS-файлу

const articles = [
    { title: "Статья 1", content: "Содержимое статьи 1", image: "/meet-main.png" },
    { title: "Статья 2", content: "Содержимое статьи 2", image: "/meet-main.png" },
    { title: "Статья 3", content: "Содержимое статьи 3", image: "/meet-main.png" },
    { title: "Статья 4", content: "Содержимое статьи 3", image: "/meet-main.png" },
    { title: "Статья 5", content: "Содержимое статьи 3", image: "/meet-main.png" },
    // Другие статьи
];

const BlogArticles = () => {
    return (
        <div className="blog-articles-container">
            <div className="articles">
                {articles.map((article, index) => (
                    <div key={index} className="article">
                        <img src={article.image} alt={article.title} className="article-image" />
                        <div className="article-content">
                            <h2 className="article-title">{article.title}</h2>
                            <p className="article-description">{article.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogArticles;
