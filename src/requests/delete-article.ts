import {manageCookie} from "@/utils/cookies";
import {TELEGRAM_AUTH} from "@/consts/references";
import {getRequiredHeaders} from "@/utils/get-required-headers";
import {Article} from "@/components/ArticlesComponent";

export async function deleteArticle(slug: string) {
    try {
        const cookieValue = manageCookie(TELEGRAM_AUTH);
        const response = await fetch(`http://localhost:3001/admin/article/delete`, {
            headers: getRequiredHeaders(cookieValue),
            method: 'POST',
            body: JSON.stringify({slug}),
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