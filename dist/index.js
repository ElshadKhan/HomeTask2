"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import {router} from "./routes/IndexRoutes";
const blogRouter_1 = require("./routes/blogRouter");
const postRouter_1 = require("./routes/postRouter");
require('dotenv').config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use(express_1.default.json());
app.use("/ht_02/api", blogRouter_1.blogRouter, postRouter_1.postRouter);
app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});
