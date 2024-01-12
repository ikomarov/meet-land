import React, { useState } from 'react';
import './index.css'

interface Article {
    id: number;
    content: string;
    title: string;
}

const ArticlesComponent: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [currentTitle, setCurrentTitle] = useState<string>('');
    const [currentContent, setCurrentContent] = useState<string>('');

    const addArticle = () => {
        const newArticle = {
            id: articles.length + 1,
            title: currentTitle,
            content: currentContent
        };
        setArticles([...articles, newArticle]);
        setCurrentTitle('');
        setCurrentContent('');
    };

    return (
        <div className="articles-container">
            <input
                className="title-input"
                type="text"
                value={currentTitle}
                onChange={(e) => setCurrentTitle(e.target.value)}
                placeholder="Заголовок статьи"
            />
            <textarea
                value={currentContent}
                onChange={(e) => setCurrentContent(e.target.value)}
                placeholder="Введите HTML статьи..."
                rows={10}
                cols={50}
            />
            <button onClick={addArticle}>Добавить</button>
            <div>
                <h2>Список статей</h2>
                {articles.map(article => (
                    <div key={article.id}>
                        <h3>{article.title}</h3>
                        <div dangerouslySetInnerHTML={{ __html: article.content }} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArticlesComponent;
