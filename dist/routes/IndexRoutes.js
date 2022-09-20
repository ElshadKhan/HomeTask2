"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const blogRouter_1 = require("./blogRouter");
const postRouter_1 = require("./postRouter");
exports.router = (0, express_1.Router)({});
exports.router.use('/blogs', blogRouter_1.blogRouter);
exports.router.use('/posts', postRouter_1.postRouter);
