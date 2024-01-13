import '../../app/globals.css'
import {getBlog} from "@/requests/get-blog";
import {Article} from "@/components/ArticlesComponent";
import BlogHeader from "@/components/BlogHeader/index.server";
import {getBlogs} from "@/requests/get-blogs";
import Footer from "@/components/Footer/index.server";
import ArticleContent from "@/components/ArticleContent";
import RelatedArticles from "../../components/RelatedArticles";
import Head from "next/head";
import React from "react";
import {HtmlHead} from "../../components/HtmlHead";

export async function getStaticPaths() {
    // Предположим, у вас есть функция для получения всех доступных ID блогов
    const blogs = await getBlogs(); // Возвращает массив ID

    // Создаём массив путей для статической генерации
    const paths = blogs.map((elem : {slug: string}) => ({
        params: {
            id: elem.slug
        },
    }));

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps(props: {params: { id: string}}) {
    const blog = await getBlog(props);
    const moreBlogs = await getBlogs();

    return { props: { blog, moreBlogs: moreBlogs.slice(-3) } };
}
export default function Home({ blog, moreBlogs }: {blog: Article, moreBlogs: Array<Article>}) {
    if (!blog) return <div />

    return (
        <div>
            <HtmlHead
                title={blog.title}
                url={"https://lovemeetmet.space/blog/"+blog.slug}
                description={blog.description}
                keywords={blog?.keywords}
            />
            <BlogHeader title={blog.title} description={blog.description}/>
            <ArticleContent htmlContent={blog.htmlContent}/>
            <div className="sharethis-inline-share-buttons"/>
            <RelatedArticles articles={moreBlogs}/>
            <Footer/>
        </div>
    );
}
