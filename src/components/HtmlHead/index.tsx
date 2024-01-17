import Head from "next/head";
import React from "react";
import JsonLdScript from "@/components/JsonLdScript/index.server";
import YaScript from "@/components/YaScript/index.server";

interface HtmlHeadProps {
    title?: string;
    description?: string;
    url?: string;
    keywords?: string;
}
export function HtmlHead({
 title = 'Meet - Главная',
 description = 'Приложение для знакомств, которое помогает людям находить интересные знакомства, дружбу и любовь. Используйте Telegram для общения и незабываемых встреч.',
 url = 'https://lovemeetmet.space/',
 keywords = 'Meet приложение, знакомства в Telegram, найти любовь онлайн, дружба через интернет, безопасные знакомства, встречи в Telegram, интерактивное знакомство, легкий поиск партнера, Telegram знакомства, платформа для знакомств'
}: HtmlHeadProps) {
    return (
        <Head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>{title}</title>
            <meta property="og:locale" content="ru_RU"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content={title}/>
            <link rel="icon" type="image/x-icon" href="https://cdn.lovemeetmet.space/land/public/favicon.png"/>
            <meta property="og:description" name="description"
                  content={description}
                  key="description"/>
            <meta property="og:url" content={url}/>
            <meta property="og:site_name" content={title}/>
            <link rel="canonical" href="https://www.lovemeetmet.space/"/>
            <meta name="twitter:title" content={title}/>
            <meta name="twitter:description" content={description}/>
            <meta property="og:image" content="https://cdn.lovemeetmet.space/land/public/logo.svg" key="image"/>
            <meta property="og:type" content="website" key="type"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta property="og:type" content="website"/>
            <meta property="og:image" content="https://cdn.lovemeetmet.space/land/public/meet-main.png"/>
            <meta property="og:image:width" content="1024"/>
            <meta property="og:image:height" content="1024"/>
            <meta property="og:image:alt" content={title}/>
            <meta property="og:image:type" content="image/png"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content={title}/>
            <meta name="twitter:image" content="https://cdn.lovemeetmet.space/land/public/meet-main.png"/>
            <meta name="twitter:label1" content="Автор"/>
            <meta name="twitter:data1" content="admin"/>
            <meta name="twitter:label2" content="Время чтения"/>
            <meta name="twitter:data2" content="Меньше минуты"/>
            <meta name="keywords" content={keywords}/>
            <meta name="robots" content="index, follow"/>
            <JsonLdScript/>
            <YaScript/>
        </Head>
    )
}