import React from 'react';

function JsonLdScript() {
    const jsonLd = {
        "@context": "http://schema.org",
        "@type": "WebSite",
        "name": "Meet - Приложение для знакомств в Telegram",
        "url": "https://lovemeetmet.space/",
        "description": "Meet - приложение для знакомств, которое помогает людям находить интересные знакомства, дружбу и любовь."
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

export default JsonLdScript;
