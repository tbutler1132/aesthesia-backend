import mongoose from "mongoose"

const Schema = mongoose.Schema

const stemSchema = new Schema(
    {
        track: {type: String},
        file: {type: String},
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
        current: {type: Boolean}
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
        iterations: [iterationSchema]
    }
)

const Song = mongoose.model('Song', songSchema)

export default Song