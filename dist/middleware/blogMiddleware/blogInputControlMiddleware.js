"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogInputControlMiddleware = void 0;
const blogInputControlMiddleware = (req, res, next) => {
    const name = req.body.name;
    const youtubeUrl = req.body.youtubeUrl;
    const errors = [];
    function isValidUrl(req) {
        var objRE = /(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;
        return objRE.test(req);
    }
    if (!name || typeof name !== "string" || !name.trim() || name.length > 15) {
        errors.push({ message: 'name is wrong', field: 'name' });
    }
    if (!youtubeUrl || typeof youtubeUrl !== "string" || !youtubeUrl.trim() || youtubeUrl.length > 100 || !isValidUrl(youtubeUrl)) {
        errors.push({ message: 'youtubeUrl is wrong', field: 'youtubeUrl' });
    }
    if (errors.length) {
        return res.status(400).send({ "errorsMessages": errors });
    }
    else {
        next();
    }
};
exports.blogInputControlMiddleware = blogInputControlMiddleware;
