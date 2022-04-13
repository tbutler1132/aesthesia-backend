import mongoose from "mongoose";
import dotenv from 'dotenv'
import User from './models/User.js'
import World from './models/World.js'
import Song from './models/Song.js'
import Submission from './models/Submission.js'
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
        referenceSongs: ["https://open.spotify.com/track/4EWCNWgDS8707fNSZ1oaA5?si=0b4c066f963e496b", "https://open.spotify.com/track/4EWCNWgDS8707fNSZ1oaA5?si=0b4c066f963e496b", "https://open.spotify.com/track/4EWCNWgDS8707fNSZ1oaA5?si=0b4c066f963e496b"],
        referenceImages: ["https://images.unsplash.com/photo-1615012553971-f7251c225e01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVkfGVufDB8fDB8fA%3D%3D&w=1000&q=80", "https://images.unsplash.com/photo-1615012553971-f7251c225e01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVkfGVufDB8fDB8fA%3D%3D&w=1000&q=80"],
        tags: ["Dark", "Cool"]
    },
    {
        description: "World 2",
        referenceSongs: ["https://open.spotify.com/track/4EWCNWgDS8707fNSZ1oaA5?si=0b4c066f963e496b", "https://open.spotify.com/track/4EWCNWgDS8707fNSZ1oaA5?si=0b4c066f963e496b", "https://open.spotify.com/track/4EWCNWgDS8707fNSZ1oaA5?si=0b4c066f963e496b"],
        referenceImages: ["https://images.unsplash.com/photo-1615012553971-f7251c225e01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVkfGVufDB8fDB8fA%3D%3D&w=1000&q=80", "https://images.unsplash.com/photo-1615012553971-f7251c225e01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVkfGVufDB8fDB8fA%3D%3D&w=1000&q=80"],
        tags: ["Light", "Nerdy"]
    },
    {
        description: "World 3",
        referenceSongs: ["https://open.spotify.com/track/4EWCNWgDS8707fNSZ1oaA5?si=0b4c066f963e496b", "https://open.spotify.com/track/4EWCNWgDS8707fNSZ1oaA5?si=0b4c066f963e496b", "https://open.spotify.com/track/4EWCNWgDS8707fNSZ1oaA5?si=0b4c066f963e496b"],
        referenceImages: ["https://images.unsplash.com/photo-1615012553971-f7251c225e01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVkfGVufDB8fDB8fA%3D%3D&w=1000&q=80", "https://images.unsplash.com/photo-1615012553971-f7251c225e01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVkfGVufDB8fDB8fA%3D%3D&w=1000&q=80"],
        tags: ["Grey", "Aloof"]
    },
]

const comments = [
    {
        content: "Needs better hi hats",
        votes: 0
    },
    {
        content: "Bass too loud",
        votes: 0
    },
    {
        content: "Amazing",
        votes: 0
    },
]

const songs = [
    {
        title: "Awesome song 1",
        bpm: 90,
        scale: "B major",
        complete: true,
        master: "file534543"
    },
    {
        title: "Awesome song 2",
        bpm: 140,
        scale: "A minor",
        complete: false,
        master: "file313646",
        currentIteration: 
            {
                bpm: 80,
                scalce: "F# minor",
                version: 2,
                current: true,
                comments: comments,
                stems: [
                    {
                        track: "Master",
                        file: "masterfsdfs"
                    },
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
            },
        iterations: [
            {
                bpm: 140,
                scalce: "A minor",
                version: 1,
                current: false,
                stems: [
                    {
                        track: "Master",
                        file: "masterfsdfs"
                    },
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

const submissions = [
    {
        bpm: 140,
        scale: "A minor",
        stems: [
            {
                track: "Master",
                file: "masterfsdfs"
            },
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
        ],
        description: "Updated the drums",
    },
    {
        bpm: 170,
        scale: "C minor",
        stems: [
            {
                track: "Master",
                file: "masterfsdfs"
            },
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
        ],
        description: "Updated the bass",
    },
]

const seedDB = async () => {
    await User.deleteMany({})
    await User.insertMany(users)
    await World.deleteMany({})
    await World.insertMany(worlds)
    await Song.deleteMany({})
    await Song.insertMany(songs)

    
    await Submission.deleteMany({})
    await Submission.insertMany(submissions)

    const song = await Song.findOne({ title: "Awesome song 2" })
    const world = await World.findOneAndUpdate({ description: "Ipsolum" }, { currentSong: song })
}

seedDB().then(() => {
    mongoose.connection.close()
})