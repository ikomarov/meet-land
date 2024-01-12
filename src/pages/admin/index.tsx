import React, { useEffect, useRef, useState } from 'react';
import { getRequiredHeaders } from "@/utils/get-required-headers";
import { manageCookie } from "@/utils/cookies";
import { TELEGRAM_AUTH } from "@/consts/references";
import { encodeAuthHeader } from "@/utils/encode64";
import ArticlesComponent from "@/components/ArticlesComponent";

async function getAdmin(data?: string) {
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

const Admin: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [auth, setAuth] = useState(false);
    const script = useRef<HTMLScriptElement>(null); // Типизация для script

    useEffect(() => {
        // Оборачиваем асинхронный код в IIFE
        (async () => {
            const cookieValue = manageCookie(TELEGRAM_AUTH);

            if (cookieValue) {
                const authAdmin = await getAdmin(cookieValue);

                setAuth(authAdmin);
            }

            setLoading(false);
        })();
    }, []);

    useEffect(() => {
        if (loading || auth) return;

        // Глобальная функция для обработки авторизации
        (window as any).onTelegramAuth = async (user: any) => {
            const data = encodeAuthHeader(user);
            manageCookie(TELEGRAM_AUTH, data, 20);
            const authAdmin = await getAdmin(data);
            setAuth(authAdmin);
            if (script.current && script.current.parentNode) {
                script.current.parentNode.removeChild(script.current);
            }
        };

        if (!script.current) {
            const scriptElement = document.createElement('script');
            scriptElement.src = "https://telegram.org/js/telegram-widget.js?22";
            scriptElement.setAttribute('data-telegram-login', 'RainPushBot');
            scriptElement.setAttribute('data-size', 'large');
            scriptElement.setAttribute('data-onauth', 'onTelegramAuth(user)');
            scriptElement.setAttribute('data-request-access', 'write');
            scriptElement.async = true;

            // @ts-ignore
            script.current = scriptElement;

            document.body.appendChild(scriptElement);
        }

        return () => {
            if (script.current && script.current.parentNode) {
                script.current.parentNode.removeChild(script.current);
            }
        };
    }, [loading, auth]);

    if (auth) {
        return <ArticlesComponent />;
    }

    return <div />;
};

export default Admin;
