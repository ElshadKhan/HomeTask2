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
exports.postControllers = void 0;
const postRepository_1 = require("../repositories/postRepository");
exports.postControllers = {
    getPosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield postRepository_1.postRepository.findPosts();
            res.status(200).send(posts);
        });
    },
    getPostById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield postRepository_1.postRepository.findPostById(req.params.id);
            if (post) {
                res.status(200).send(post);
            }
            else {
                res.send(404);
            }
        });
    },
    createPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newPost = yield postRepository_1.postRepository.createPost(req.body.title, req.body.shortDescription, req.body.content, req.body.blogId);
            res.status(201).send(newPost);
        });
    },
    updatePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield postRepository_1.postRepository.updatePost(req.params.id, req.body.title, req.body.shortDescription, req.body.content, req.body.blogId);
            if (post) {
                res.send(204);
            }
            else {
                res.send(404);
            }
        });
    },
    deletePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield postRepository_1.postRepository.deletePost(req.params.id);
            if (post) {
                res.send(204);
            }
            else {
                res.send(404);
            }
        });
    }
};
