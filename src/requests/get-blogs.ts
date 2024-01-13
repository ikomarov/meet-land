import {apiUrl} from "@/consts/references";
export async function getBlogs() {
    try {
        const response = await fetch(`${apiUrl}/blogs`, {
            method: 'POST'
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const { blogs } = await response.json();

        return blogs;
    } catch (error: any) {
        console.error("Fetch error: " + error.message);
        return false;
    }
}