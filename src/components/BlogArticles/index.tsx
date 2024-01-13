import React from 'react';
import './index.css';
import {Article} from "@/components/ArticlesComponent";
import Image from "next/image";

const BlogArticles = ({blogs}: {blogs: Array<Article>}) => {
    return (
        <div className="blog-articles-container">
            <div className="articles">
                {blogs.map((article, index) => (
                    <a key={index} className="article" href={'/blog/' + article.slug}>
                        <Image
                            width={400}
                            height={400}
                            src={article.image ? `/blog/${article.image}` : '/blog/logo-1.jpg'}
                            className="article-image"
                            alt={article.title}
                        />
                        <div className="article-content">
                            <h2 className="article-title">{article.title}</h2>
                            <p className="article-description">{article.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default BlogArticles;
