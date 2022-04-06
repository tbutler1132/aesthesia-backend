import mongoose from "mongoose"

const Schema = mongoose.Schema


const commentSchema = new Schema(
    {
        content: {type: String},
        user: {type: Schema.Types.ObjectId, ref: 'User'},
        votes: {type: Number}
    },
    {
        timestamps: true
    }
)


const Comment = mongoose.model('Comment', commentSchema)

export default Comment