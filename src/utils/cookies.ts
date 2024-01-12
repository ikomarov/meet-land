export function manageCookie(name: string, value?: string, min?: number): string | undefined {
    try {
        // Создание или обновление cookie
        if (value !== undefined) {
            let expires = '';
            if (min) {
                const date = new Date();
                date.setTime(date.getTime() + (min * 60 * 1000));
                expires = `; expires=${date.toUTCString()}`;
            }
            document.cookie = `${name}=${value || ''}${expires}; path=/`;
            return;
        }

        // Чтение cookie
        const nameEQ = `${name}=`;
        const ca = document.cookie.split(';');

        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }

        return undefined;
    } catch (e) {
        return ''
    }
}