import {apiUrl} from "@/consts/references";
export async function getBlog({params}: {params: {id: string}}) {
    try {
        const response = await fetch(`${apiUrl}/blog/${params.id}`, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const { blog } = await response.json();

        return blog;
    } catch (error: any) {
        console.error("Fetch error: " + error.message);
        return false;
    }
}