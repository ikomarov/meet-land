import {manageCookie} from "@/utils/cookies";
import {TELEGRAM_AUTH} from "@/consts/references";
import {getRequiredHeaders} from "@/utils/get-required-headers";

export async function getListArticle() {
    try {
        const cookieValue = manageCookie(TELEGRAM_AUTH);
        const response = await fetch(`http://localhost:3001/admin/articles`, {
            headers: getRequiredHeaders(cookieValue),
            method: 'POST'
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const { articles } = await response.json();

        return articles || [];
    } catch (error: any) {
        console.error("Fetch error: " + error.message);
        return false;
    }
}