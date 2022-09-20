import {Router} from "express";
import {blogControllers} from "../controllers/blogControllers";
import {blogInputControlMiddleware} from "../middleware/blogMiddleware/blogInputControlMiddleware";
import {inputBlogValidationMiddleware} from "../middleware/input-validation-middleware";

export const blogRouter = Router({})

blogRouter.get('/blogs', blogControllers.getBlogs)
blogRouter.get('/blogs/:id', blogControllers.getBlogById)
blogRouter.post('/blogs', blogInputControlMiddleware, inputBlogValidationMiddleware, blogControllers.createBlog)
blogRouter.put('/blogs/:id',blogInputControlMiddleware, inputBlogValidationMiddleware, blogControllers.updateBlog)
blogRouter.delete('/blogs/:id', inputBlogValidationMiddleware, blogControllers.deleteBlog)
