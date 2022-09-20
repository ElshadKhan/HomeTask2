"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRepository = exports.blogs = void 0;
exports.blogs = [];
exports.blogRepository = {
    findBlogs() {
        return exports.blogs;
    },
    findBlogById(id) {
        let blog = exports.blogs.find(b => b.id === id);
        return blog;
    },
    makeBlog(name, youtubeUrl) {
        const newBlog = {
            id: String(+(new Date())),
            name: name,
            youtubeUrl: youtubeUrl
        };
        exports.blogs.push(newBlog);
        return newBlog;
    },
    replaceBlog(id, name, youtubeUrl) {
        let blog = exports.blogs.find(b => b.id === id);
        if (blog) {
            blog.name = name;
            blog.youtubeUrl = youtubeUrl;
            return true;
        }
        else {
            return false;
        }
    },
    removeBlog(id) {
        for (let i = 0; i < exports.blogs.length; i++) {
            if (exports.blogs[i].id === id) {
                exports.blogs.splice(i, 1);
                return true;
            }
        }
        return false;
    }
};
