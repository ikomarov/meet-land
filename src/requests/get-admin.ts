import {getRequiredHeaders} from "@/utils/get-required-headers";

export async function getAdmin(data?: string) {
    try {
        const response = await fetch(`http://localhost:3001/blog/admin`, {
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