import React from 'react';

export interface ContentSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const ContentSection = ({ id, title, children }: ContentSectionProps) => {
  return (
    <section id={id} style={{ padding: '20px', borderBottom: '1px solid #ddd' }}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default ContentSection;
