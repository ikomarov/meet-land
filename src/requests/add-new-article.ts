import {manageCookie} from "@/utils/cookies";
import {apiUrl, TELEGRAM_AUTH} from "@/consts/references";
import {getRequiredHeaders} from "@/utils/get-required-headers";
import {Article} from "@/components/ArticlesComponent";

export async function addNewArticle(params: Article) {
    try {
        const cookieValue = manageCookie(TELEGRAM_AUTH);
        const response = await fetch(`${apiUrl}/admin/article/save`, {
            headers: getRequiredHeaders(cookieValue),
            method: 'POST',
            body: JSON.stringify(params),
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