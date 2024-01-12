import {manageCookie} from "@/utils/cookies";
import {apiUrl, TELEGRAM_AUTH} from "@/consts/references";
import {getRequiredHeaders} from "@/utils/get-required-headers";

export async function getArticle(id: string) {
    try {
        const cookieValue = manageCookie(TELEGRAM_AUTH);
        const response = await fetch(`${apiUrl}/admin/article`, {
            headers: getRequiredHeaders(cookieValue),
            method: 'POST',
            body: JSON.stringify({slug: id}),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const { data } = await response.json();

        return data;
    } catch (error: any) {
        console.error("Fetch error: " + error.message);
        return false;
    }
}