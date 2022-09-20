"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postInputControlMiddleware = void 0;
const blogRepository_1 = require("../../repositories/blogRepository");
const postInputControlMiddleware = (req, res, next) => {
    const title = req.body.title;
    const shortDescription = req.body.shortDescription;
    const content = req.body.content;
    const blogId = req.body.blogId;
    const blog = blogRepository_1.blogs.find(b => b.id === blogId);
    const errors = [];
    if (!title || typeof title !== "string" || !title.trim() || title.length > 30) {
        errors.push({ message: 'title is wrong', field: 'title' });
    }
    if (!shortDescription || typeof shortDescription !== "string" || !shortDescription.trim() || shortDescription.length > 100) {
        errors.push({ message: 'shortDescription is wrong', field: 'shortDescription' });
    }
    if (!content || typeof content !== "string" || !content.trim() || content.length > 1000) {
        errors.push({ message: 'content is wrong', field: 'content' });
    }
    if (!blog || typeof blogId !== "string") {
        errors.push({ message: 'blogId is wrong', field: 'blogId' });
    }
    if (errors.length) {
        return res.status(400).send({ "errorsMessages": errors });
    }
    else {
        next();
    }
};
exports.postInputControlMiddleware = postInputControlMiddleware;
