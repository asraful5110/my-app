"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postModel = void 0;
var mongoose_1 = require("mongoose");
var postsSchema = new mongoose_1.Schema({
    title: String,
    body: String,
    user: {
        type: mongoose_1.Types.ObjectId,
        ref: "User"
    },
    index: {
        type: [String],
        index: true
    }
});
postsSchema.statics.findLimit = function (li) {
    return this.find({}).limit(li);
};
exports.postModel = (0, mongoose_1.model)('Post', postsSchema);
