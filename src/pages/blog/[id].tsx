import '../../app/globals.css'
import {getBlog} from "@/requests/get-blog";
import {Article} from "@/components/ArticlesComponent";
import BlogHeader from "@/components/BlogHeader/index.server";
import {getBlogs} from "@/requests/get-blogs";
import Footer from "@/components/Footer/index.server";
import ArticleContent from "@/components/ArticleContent";

export async function getStaticPaths() {
    // Предположим, у вас есть функция для получения всех доступных ID блогов
    const blogs = await getBlogs(); // Возвращает массив ID

    // Создаём массив путей для статической генерации
    const paths = blogs.map(({slug} : {slug: string}) => ({
        params: {
            id: slug
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(props: {params: { id: string}}) {
    const blog = await getBlog(props);

    return { props: { blog } };
}
export default function Home({ blog }: {blog: Article}) {
    return (
        <div>
            <BlogHeader title={blog.title} description={blog.description}/>
            <ArticleContent htmlContent={blog.htmlContent}/>
            <Footer />
        </div>
    );
}
