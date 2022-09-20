import {Router} from "express";
import {blogRouter} from "./blogRouter";
import {postRouter} from "./postRouter";

export const router = Router({})

router.use('/blogpage', blogRouter)
router.use('/postpage', postRouter)