import React, {useCallback, useEffect, useState} from 'react';
import './index.css'
import {makeSlug} from "@/utils/makeSlug";
import {addNewArticle} from "@/requests/add-new-article";
import {getListArticle} from "@/requests/get-list-article";
import {deleteArticle} from "@/requests/delete-article";

export interface Article {
    htmlContent: string;
    title: string;
    slug: string;
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

    const deleteArt = useCallback(async (slug: string) => {
        await deleteArticle(slug)
        const arts = await getListArticle()

        setArticles(arts)
    }, []);

    // @ts-ignore
    useEffect(async () => {
        const arts = await getListArticle()

        setArticles(arts)
    }, []);

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
                    <div key={article.title} style={{padding: '20px'}}>
                        <a href={"/admin/" + article.slug}>
                            {article.title}
                        </a>
                        <button
                            style={{marginLeft: "20px", backgroundColor: 'red'}}
                            onClick={() => deleteArt(article.slug)}
                        >
                            Удалить
                        </button>
                        <br />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArticlesComponent;
