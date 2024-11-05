"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function handleError(err, req, res, next) {
    res.status(403).json({ error: err });
}
exports.default = handleError;
