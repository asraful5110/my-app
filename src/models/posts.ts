import {Schema,model,Types} from 'mongoose';

const postsSchema = new Schema({
    title : String,
    body : String,
    user : {
        type : Types.ObjectId,
        ref : "User"
    },
    index : {
        type : [String],
        index : true
    }
});

postsSchema.statics.findLimit = function(li){
    return this.find({}).limit(li)
}

export const postModel = model('Post',postsSchema)