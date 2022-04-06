import mongoose from "mongoose"

const Schema = mongoose.Schema


const stemSchema = new Schema(
    {
        track: {type: String},
        file: {type: String},
    }
)


const submissionSchema = new Schema(
    {
        artist: {type: Schema.Types.ObjectId, ref: 'User'},
        bpm: {type: Number},
        scale: {type: String},
        selected: {type: Boolean, default: false},
        stems: [stemSchema],
        description: {type: String},
        votes: {type: Number, default: 0}
    },
    {
        timestamps: true
    }
)


const Submission = mongoose.model('Submission', submissionSchema)

export default Submission