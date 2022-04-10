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
        submissions: [{type: Schema.Types.ObjectId, ref: 'Submission', default: []}],
        description: {type: String},
        bpm: {type: Number},
        scale: {type: String},
        version: {type: Number},
        stems: [stemSchema],
        current: {type: Boolean, default: true},
        comments: [commentSchema],
        completeVotes: {type: Number, default: 0}
    },
    {
        timestamps: true
    }
)


const songSchema = new Schema(
    {
        title: {type: String, default: ""},
        bpm: {type: Number, default: 0},
        scale: {type: String, default: ""},
        complete: {type: Boolean},
        master: {type: String, default: ""},
        iterations: [iterationSchema],
        currentIteration: iterationSchema
    }
)

const Song = mongoose.model('Song', songSchema)

export default Song