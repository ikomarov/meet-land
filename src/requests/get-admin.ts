import {getRequiredHeaders} from "@/utils/get-required-headers";
import {apiUrl} from "@/consts/references";

export async function getAdmin(data?: string) {
    try {
        const response = await fetch(`${apiUrl}/blog/admin`, {
            headers: getRequiredHeaders(data),
            method: 'POST',
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