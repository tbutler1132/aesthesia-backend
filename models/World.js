const mongoose = require('mongoose')

const Schema = mongoose.Schema

const worldSchema = new Schema(
    {

        songs: {type: Schema.Types.ObjectId, ref: 'Song'},
        password: {type: String, required: true},
        fullName: {type: String, required: true},
        bio: {type: String},
        // user: {type: Schema.Types.ObjectId, ref: 'User'},
        // sent: {type: Array, default: [], timestamps: true},
        // received: {type: Array, default: [], timestamps: true}
    }
)
