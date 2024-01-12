import '../../app/globals.css'
import BlogHeader from "@/components/BlogHeader/index.server";
import BlogArticles from "@/components/BlogArticles";
import {useRouter} from "next/router";
import Footer from "@/components/Footer/index.server";

export default function Articles() {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };


    return <div>
        <BlogHeader />
        <BlogArticles />
        <Footer />
    </div>;
}
