import mongoose from "mongoose"

import { stemSchema } from './Song'

const Schema = mongoose.Schema


const submissionSchema = new Schema(
    {
        artist: {type: Schema.Types.ObjectId, ref: 'User'},
        bpm: {type: Number},
        scale: {type: String},
        selected: {type: Boolean},
        stems: [stemSchema],
        description: {type: String},
        votes: {type: Number}
    },
    {
        timestamps: true
    }
)


const Submission = mongoose.model('Submission', submissionSchema)

export default Submission