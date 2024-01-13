import '../../app/globals.css'
import BlogHeader from "@/components/BlogHeader/index.server";
import BlogArticles from "@/components/BlogArticles";
import Footer from "@/components/Footer/index.server";
import {getBlogs} from "@/requests/get-blogs";
import {Article} from "@/components/ArticlesComponent";

export async function getStaticProps() {
    const blogs = await getBlogs();
    return { props: { blogs } }; // Передаем blogs как пропс
}

export default function Articles({blogs} : {blogs: Array<Article>}) {
    return (
        <div>
            <BlogHeader title="Наш блог" description="Место, где наши редакторы делятся своими мыслями"/>
            <BlogArticles blogs={blogs} />
            <Footer />
        </div>
    );
}
