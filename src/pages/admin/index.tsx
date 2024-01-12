import React, { useEffect, useRef, useState } from 'react';
import { manageCookie } from "@/utils/cookies";
import { TELEGRAM_AUTH } from "@/consts/references";
import { encodeAuthHeader } from "@/utils/encode64";
import ArticlesComponent from "@/components/ArticlesComponent";
import {getAdmin} from "@/requests/get-admin";

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
