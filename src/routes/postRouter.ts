import {Router} from "express";
import {postControllers} from "../controllers/postControllers";
import {postInputControlMiddleware} from "../middleware/postMiddleware/postInputControlMiddleware";
import {inputBlogValidationMiddleware} from "../middleware/input-validation-middleware";

export const postRouter = Router({})

postRouter.get('/posts', postControllers.getPosts)
postRouter.get('/posts:id', postControllers.getPostById)
postRouter.post('/posts', postInputControlMiddleware, inputBlogValidationMiddleware, postControllers.createPost)
postRouter.put('/posts:id', postInputControlMiddleware, inputBlogValidationMiddleware, postControllers.updatePost)
postRouter.delete('/posts:id', inputBlogValidationMiddleware, postControllers.deletePost)