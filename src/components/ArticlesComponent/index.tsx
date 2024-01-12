import React, {useCallback, useEffect, useState} from 'react';
import './index.css'
import {makeSlug} from "@/utils/makeSlug";
import {addNewArticle} from "@/requests/add-new-article";
import {getListArticle} from "@/requests/get-list-article";
import {deleteArticle} from "@/requests/delete-article";
import {getArticle} from "@/requests/get-article";
import {useRouter} from "next/router";
import {updateArticle} from "@/requests/update-article";

export interface Article {
    htmlContent: string;
    title: string;
    slug: string;
}

const ArticlesComponent: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    const [articles, setArticles] = useState<Article[]>([]);
    const [currentTitle, setCurrentTitle] = useState<string>('');
    const [currentContent, setCurrentContent] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

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

    const updateArt = useCallback(async () => {
        const newArticle = {
            title: currentTitle,
            htmlContent: currentContent,
            slug: id
        } as Article;

        await updateArticle({...newArticle})


        setArticles(articles.map((elem) => {
            if (elem.slug === id) return newArticle

            return elem
        }));
    }, [currentTitle, currentContent, id]);

    const deleteArt = useCallback(async (slug: string) => {
        await deleteArticle(slug)
        const arts = await getListArticle()

        setArticles(arts)
    }, []);

    // @ts-ignore
    useEffect(() => {
        async function fetchData() {
            const arts = await getListArticle()

            if (id) {
                const {title, htmlContent} = await getArticle(id.toString())

                setCurrentTitle(title);
                setCurrentContent(htmlContent);
            }

            setArticles(arts)
            setLoading(false)
        }

        fetchData();
    }, [id]);

    if (loading) {
        return <div>...</div>
    }

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
            {id && <button onClick={updateArt}>Обновить</button>}
            {!id && <button onClick={addArticle}>Добавить</button>}
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
