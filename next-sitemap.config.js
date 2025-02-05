const fetchBlogPosts = async () => {
    try {
        // Замените этот URL на URL вашего API
        const res = await fetch('https://lovemeetmet.space/api/blogs', {
            method: "post"
        });

        const req = await res.json();
        return req.blogs.map(post => `/blog/${post.slug}`);
    } catch (e) {
        console.log(e)
    }
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
    exclude: ['/admin*']
};
