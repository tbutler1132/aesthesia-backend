import mongoose from "mongoose"

const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        email: {type: String, required: true},
        artistName: {type: String, required: true},
        world: {type: Schema.Types.ObjectId, ref: 'World'},
        submissions: {type: Schema.Types.ObjectId, ref: 'Submission'},
        password: {type: String, required: true},
        fullName: {type: String, required: true},
        bio: {type: String},
    }
)


const User = mongoose.model('User', userSchema)

// export default User

export default User