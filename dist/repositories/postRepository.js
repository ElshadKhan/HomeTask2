"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRepository = void 0;
const blogRepository_1 = require("./blogRepository");
let posts = [];
exports.postRepository = {
    findPosts() {
        return posts;
    },
    findPostById(id) {
        let post = posts.find(v => v.id === id);
        return post;
    },
    createPost(title, shortDescription, content, blogId) {
        const blog = blogRepository_1.blogs.find(b => b.id === blogId);
        const newPost = {
            id: String(+(new Date())),
            title: title,
            shortDescription: shortDescription,
            content: content,
            blogId: blogId,
            blogName: blog.name
        };
        posts.push(newPost);
        return newPost;
    },
    updatePost(id, title, shortDescription, content, blogId) {
        let post = posts.find(p => p.id === id);
        if (post) {
            post.title = title;
            post.shortDescription = shortDescription;
            post.content = content;
            post.blogId = blogId;
            return true;
        }
        else {
            return false;
        }
    },
    deletePost(id) {
        for (let i = 0; i < posts.length; i++) {
            if (posts[i].id === id) {
                posts.splice(i, 1);
                return true;
            }
        }
        return false;
    }
};
