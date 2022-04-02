import mongoose from "mongoose";
import dotenv from 'dotenv'
import User from './models/User.js'
import World from './models/World.js'
import Song from './models/Song.js'
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

const songs = [
    {
        title: "Awesome song 1",
        bpm: 140,
        scale: "A minor",
        complete: true
    },
    {
        title: "Awesome song 2",
        bpm: 140,
        scale: "A minor",
        complete: false,
        iterations: [
            {
                bpm: 140,
                scalce: "A minor",
                version: 1,
                stems: [
                    {
                        track: "Drums",
                        file: "fdsfds"
                    },
                    {
                        track: "Vocals",
                        file: "wwsfds"
                    },
                    {
                        track: "Instruments",
                        file: "ggsfds"
                    },
                    {
                        track: "Bass",
                        file: "vvbsfds"
                    },
                ]
            }
        ]
    },
]

const seedDB = async () => {
    await User.deleteMany({})
    await User.insertMany(users)
    await World.deleteMany({})
    await World.insertMany(worlds)
    await Song.deleteMany({})
    await Song.insertMany(songs)
}

seedDB().then(() => {
    mongoose.connection.close()
})