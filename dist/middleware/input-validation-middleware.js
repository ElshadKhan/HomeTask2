"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputBlogValidationMiddleware = void 0;
const inputBlogValidationMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const loginPass = 'admin:qwerty';
    //const base64 = new Buffer(loginPass, 'base64')
    const validAuthHeader = 'Basic YWRtaW46cXdlcnR5';
    if (authHeader !== validAuthHeader) {
        res.sendStatus(401);
    }
    else {
        next();
    }
};
exports.inputBlogValidationMiddleware = inputBlogValidationMiddleware;
