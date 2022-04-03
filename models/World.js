import mongoose from "mongoose"

const Schema = mongoose.Schema

const worldSchema = new Schema(
    {

        songs: [{type: Schema.Types.ObjectId, ref: 'Song'}],
        description: {type: String, required: true},
        referenceSongs: [String],
        referenceImages: [String],
        tags: [String],
    }
)

const World = mongoose.model('World', worldSchema)

export default World
