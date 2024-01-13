const fetchBlogPosts = async () => {
    // Замените этот URL на URL вашего API
    const res = await fetch('https://lovemeetmet.space/api/blogs');
    const { blogs } = await res.json();
    return blogs.map(post => `/blog/${post.slug}`);
};

module.exports = {
    siteUrl: 'https://lovemeetmet.space',
    generateRobotsTxt: true,
    additionalPaths: async (config) => {
        const blogPaths = await fetchBlogPosts();
        // Добавление путей блогов
        const paths = blogPaths.map(path => ({ loc: path }));
        // Добавление основного пути /blog
        paths.push({ loc: '/blog' });

        return paths;
    },
};
