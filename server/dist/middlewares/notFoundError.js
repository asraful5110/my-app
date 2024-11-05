"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function notFoundError(req, res, next) {
    if (res.headersSent) {
        return next('Your requested route not found');
    }
    res.status(404).json('Your requested route not found');
}
exports.default = notFoundError;
