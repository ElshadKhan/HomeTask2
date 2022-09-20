"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogControllers = void 0;
const blogRepository_1 = require("../repositories/blogRepository");
exports.blogControllers = {
    getBlogs(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const blogs = yield blogRepository_1.blogRepository.findBlogs();
            res.status(200).send(blogs);
        });
    },
    getBlogById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const blog = yield blogRepository_1.blogRepository.findBlogById(req.params.id);
            if (blog) {
                res.status(200).send(blog);
            }
            else {
                res.send(404);
            }
        });
    },
    createBlog(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newBlog = yield blogRepository_1.blogRepository.makeBlog(req.body.name, req.body.youtubeUrl);
            res.status(201).send(newBlog);
        });
    },
    updateBlog(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const blog = yield blogRepository_1.blogRepository.replaceBlog(req.params.id, req.body.name, req.body.youtubeUrl);
            if (blog) {
                res.send(204);
            }
            else {
                res.send(404);
            }
        });
    },
    deleteBlog(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const blog = yield blogRepository_1.blogRepository.removeBlog(req.params.id);
            if (blog) {
                res.send(204);
            }
            else {
                res.send(404);
            }
        });
    }
};
