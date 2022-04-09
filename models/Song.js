import mongoose from "mongoose"

const Schema = mongoose.Schema

const stemSchema = new Schema(
    {
        track: {type: String},
        file: {type: String},
    }
)

const commentSchema = new Schema(
    {
        content: String,
        user: {type: Schema.Types.ObjectId, ref: 'User'},
        votes: Number
    },
    {
        timestamps: true
    }
)

const iterationSchema = new Schema(
    {
        artist: {type: Schema.Types.ObjectId, ref: 'User'},
        submissions: [{type: Schema.Types.ObjectId, ref: 'Submission'}],
        description: {type: String},
        bpm: {type: Number},
        scale: {type: String},
        version: {type: Number},
        stems: [stemSchema],
        current: {type: Boolean},
        comments: [commentSchema]
    },
    {
        timestamps: true
    }
)


const songSchema = new Schema(
    {
        title: {type: String},
        bpm: {type: Number},
        scale: {type: String},
        complete: {type: Boolean},
        master: {type: String},
        iterations: [iterationSchema],
        currentIteration: iterationSchema
    }
)

const Song = mongoose.model('Song', songSchema)

export default Song