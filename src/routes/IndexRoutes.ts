import {Router} from "express";
import {blogRouter} from "./blogRouter";
import {postRouter} from "./postRouter";

export const router = Router({})

router.use('/blogs', blogRouter)
router.use('/posts', postRouter)