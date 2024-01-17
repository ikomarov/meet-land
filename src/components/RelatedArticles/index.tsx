import React from 'react';
import {Article} from "@/components/ArticlesComponent";
import './index.css'

type RelatedArticlesProps = {
    articles: Article[];
};

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ articles }) => {
    return (
        <div className="related-articles">
            <h2 className="related-title">Еще статьи по теме</h2>
            <div>
                {articles.map((article, index) => (
                    <div key={index} className="related-article">
                        <a href={"/blog/"+article.slug}>{article.title}</a>
                        <p>{article.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RelatedArticles;
