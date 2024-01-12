import React, { useState } from 'react';
import './index.css'

interface Article {
    id: number;
    content: string;
}

const ArticlesComponent: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [currentArticle, setCurrentArticle] = useState<string>('');

    const handleArticleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCurrentArticle(event.target.value);
    };

    const addArticle = () => {
        const newArticle = {
            id: articles.length + 1,
            content: currentArticle
        };
        setArticles([...articles, newArticle]);
        setCurrentArticle('');
    };

    return (
        <div className="articles-container">
              <textarea
                  value={currentArticle}
                  onChange={handleArticleChange}
                  placeholder="Введите HTML статьи..."
                  rows={10}
                  cols={50}
              />
            <button onClick={addArticle}>Добавить</button>
            <div>
                <h2>Список статей</h2>
                {articles.map(article => (
                    <div key={article.id} dangerouslySetInnerHTML={{ __html: article.content }} />
                ))}
            </div>
        </div>
    );
};

export default ArticlesComponent;
