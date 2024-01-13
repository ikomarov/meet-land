import React from 'react';
import './index.css';

interface ArticleContentProps {
    htmlContent: string;
}

const ArticleContent: React.FC<ArticleContentProps> = ({ htmlContent }) => {
    return (
        <div className="article-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
};

export default ArticleContent;
