import {NextFunction, Request, Response} from "express";

export const inputBlogValidationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization

    const loginPass = 'admin:qwerty'
    const base64 = new Buffer(loginPass, 'base64')
    const validAuthHeader = `Basic ${base64}`
    console.log(validAuthHeader)

    if (authHeader !== validAuthHeader) {
        res.sendStatus(401);
    } else {
        next()
    }
}