import React, {useCallback, useState} from 'react';
import './index.css'
import {getRequiredHeaders} from "@/utils/get-required-headers";
import {manageCookie} from "@/utils/cookies";
import {TELEGRAM_AUTH} from "@/consts/references";
import {makeSlug} from "@/utils/makeSlug";

interface Article {
    htmlContent: string;
    title: string;
    slug: string;
}

async function addNewArticle(params: Article) {
    try {
        const cookieValue = manageCookie(TELEGRAM_AUTH);
        const response = await fetch(`http://localhost:3001/admin/article/save`, {
            headers: getRequiredHeaders(cookieValue),
            method: 'POST',
            body: JSON.stringify(params),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const { code } = await response.json();

        return code === 'SUCCESS';
    } catch (error: any) {
        console.error("Fetch error: " + error.message);
        return false;
    }
}

const ArticlesComponent: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [currentTitle, setCurrentTitle] = useState<string>('');
    const [currentContent, setCurrentContent] = useState<string>('');

    const addArticle = useCallback(async () => {
        const newArticle = {
            title: currentTitle,
            htmlContent: currentContent,
            slug: makeSlug(currentTitle)
        } as Article;

        await addNewArticle({...newArticle})

        setArticles([...articles, newArticle]);
        setCurrentTitle('');
        setCurrentContent('');
    }, [currentTitle, currentContent]);

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
                    <div key={article.title}>
                        <h3>{article.title}</h3>
                        <div dangerouslySetInnerHTML={{ __html: article.htmlContent }} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArticlesComponent;
