import mongoose from "mongoose";
import dotenv from 'dotenv'
import User from './models/User.js'
import World from './models/World.js'
dotenv.config()

const mdb = process.env.MONGO_DB_URI
const CONNECTION_URL = `${mdb}`

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connection open'))
  .catch((error) => console.log(`${error} did not connect`));

const users = [
    {
        email: "tbutler1132@gmail.com",
        artistName: "Swizzed",
        fullName: "Tim Butler",
        password: "123",
    },
    {
        email: "tbutler1132@gmail.com",
        artistName: "Swizzed",
        fullName: "Tim Butler",
        password: "123",
    },
    {
        email: "tbutler1132@gmail.com",
        artistName: "Swizzed",
        fullName: "Tim Butler",
        password: "123",
    },
]

const worlds = [
    {
        description: "Ipsolum",
        referenceSongs: ["Gold Digger", "Stronger", "Runaway"],
        referenceImages: ["Blue", "Green"],
        tags: ["Dark", "Cool"]
    }
]

const seedDB = async () => {
    await User.deleteMany({})
    await User.insertMany(users)
    await World.deleteMany({})
    await World.insertMany(worlds)
}

seedDB().then(() => {
    mongoose.connection.close()
})