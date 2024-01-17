import '../../app/globals.css'
import BlogHeader from "@/components/BlogHeader/index.server";
import BlogArticles from "@/components/BlogArticles";
import Footer from "@/components/Footer/index.server";
import {getBlogs} from "@/requests/get-blogs";
import {Article} from "@/components/ArticlesComponent";
import React from "react";
import {HtmlHead} from "@/components/HtmlHead";
import YaScript from "@/components/YaScript/index.server";
import JsonLdScript from "@/components/JsonLdScript/index.server";

export async function getServerSideProps() {
    const blogs = await getBlogs();
    return { props: { blogs } };
}

export default function Articles({blogs} : {blogs: Array<Article>}) {
    return (
        <div>
            <JsonLdScript/>
            <YaScript/>
            <HtmlHead
                title="Блог - Meet"
                url="https://lovemeetmet.space/blog"
                keywords='блог о знакомствах, советы по знакомствам, истории успеха в знакомствах, Meet блог, знакомства в Telegram, онлайн знакомства, современные отношения, как знакомиться в интернете, секреты успешных знакомств, знакомства и коммуникация'
                description="Блог приложения Meet. В этом разделе собраны интересные записи на популярные и востребованные темы. Место, где наши редакторы делятся своими мыслями."
            />
            <BlogHeader title="Наш блог" description="Место, где наши редакторы делятся своими мыслями"/>
            <BlogArticles blogs={blogs} />
            <Footer />
        </div>
    );
}
