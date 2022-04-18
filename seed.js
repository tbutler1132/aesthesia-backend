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
        description: "World 2 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        referenceSongs: ["https://open.spotify.com/track/4EWCNWgDS8707fNSZ1oaA5?si=0b4c066f963e496b", "https://open.spotify.com/track/4EWCNWgDS8707fNSZ1oaA5?si=0b4c066f963e496b", "https://open.spotify.com/track/4EWCNWgDS8707fNSZ1oaA5?si=0b4c066f963e496b"],
        referenceImages: ["https://images.unsplash.com/photo-1615012553971-f7251c225e01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVkfGVufDB8fDB8fA%3D%3D&w=1000&q=80", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Color_icon_green.svg/800px-Color_icon_green.svg.png", "https://sciencenotes.org/wp-content/uploads/2020/07/purple-fire1.jpg"],
        tags: ["Dark", "Cool"]
    },
    {
        description: "World 1 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        referenceSongs: ["https://open.spotify.com/track/4EWCNWgDS8707fNSZ1oaA5?si=0b4c066f963e496b", "https://open.spotify.com/track/4EWCNWgDS8707fNSZ1oaA5?si=0b4c066f963e496b", "https://open.spotify.com/track/4EWCNWgDS8707fNSZ1oaA5?si=0b4c066f963e496b"],
        referenceImages: ["https://images.unsplash.com/photo-1615012553971-f7251c225e01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVkfGVufDB8fDB8fA%3D%3D&w=1000&q=80", "https://images.unsplash.com/photo-1615012553971-f7251c225e01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVkfGVufDB8fDB8fA%3D%3D&w=1000&q=80"],
        tags: ["Light", "Nerdy"]
    },
    {
        description: "World 3 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
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
                description: "Made the bass slap",
                stems: [
                    {
                        track: "Master",
                        file: "https://res.cloudinary.com/dezy11bxa/video/upload/v1650292747/Liz_Phair_-_Why_Can_t_I__Official_Video_qt2ako.mp4"
                    },
                    {
                        track: "Drums",
                        file: "https://res.cloudinary.com/dezy11bxa/video/upload/v1650292747/Liz_Phair_-_Why_Can_t_I__Official_Video_qt2ako.mp4"
                    },
                    {
                        track: "Vocals",
                        file: "https://res.cloudinary.com/dezy11bxa/video/upload/v1650292747/Liz_Phair_-_Why_Can_t_I__Official_Video_qt2ako.mp4"
                    },
                    {
                        track: "Instruments",
                        file: "https://res.cloudinary.com/dezy11bxa/video/upload/v1650292747/Liz_Phair_-_Why_Can_t_I__Official_Video_qt2ako.mp4"
                    },
                    {
                        track: "Bass",
                        file: "https://res.cloudinary.com/dezy11bxa/video/upload/v1650292747/Liz_Phair_-_Why_Can_t_I__Official_Video_qt2ako.mp4"
                    },
                ]
            },
        iterations: [
            {
                bpm: 140,
                scalce: "A minor",
                version: 1,
                current: false,
                description: "Made the bass slap",
                stems: [
                    {
                        track: "Master",
                        file: "https://res.cloudinary.com/dezy11bxa/video/upload/v1650292747/Liz_Phair_-_Why_Can_t_I__Official_Video_qt2ako.mp4"
                    },
                    {
                        track: "Drums",
                        file: "https://res.cloudinary.com/dezy11bxa/video/upload/v1650292747/Liz_Phair_-_Why_Can_t_I__Official_Video_qt2ako.mp4"
                    },
                    {
                        track: "Vocals",
                        file: "https://res.cloudinary.com/dezy11bxa/video/upload/v1650292747/Liz_Phair_-_Why_Can_t_I__Official_Video_qt2ako.mp4"
                    },
                    {
                        track: "Instruments",
                        file: "https://res.cloudinary.com/dezy11bxa/video/upload/v1650292747/Liz_Phair_-_Why_Can_t_I__Official_Video_qt2ako.mp4"
                    },
                    {
                        track: "Bass",
                        file: "https://res.cloudinary.com/dezy11bxa/video/upload/v1650292747/Liz_Phair_-_Why_Can_t_I__Official_Video_qt2ako.mp4"
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
                file: "https://res.cloudinary.com/dezy11bxa/video/upload/v1650292747/Liz_Phair_-_Why_Can_t_I__Official_Video_qt2ako.mp4"
            },
            {
                track: "Drums",
                file: "https://res.cloudinary.com/dezy11bxa/video/upload/v1650292747/Liz_Phair_-_Why_Can_t_I__Official_Video_qt2ako.mp4"
            },
            {
                track: "Vocals",
                file: "https://res.cloudinary.com/dezy11bxa/video/upload/v1650292747/Liz_Phair_-_Why_Can_t_I__Official_Video_qt2ako.mp4"
            },
            {
                track: "Instruments",
                file: "https://res.cloudinary.com/dezy11bxa/video/upload/v1650292747/Liz_Phair_-_Why_Can_t_I__Official_Video_qt2ako.mp4"
            },
            {
                track: "Bass",
                file: "https://res.cloudinary.com/dezy11bxa/video/upload/v1650292747/Liz_Phair_-_Why_Can_t_I__Official_Video_qt2ako.mp4"
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
                file: "https://res.cloudinary.com/dezy11bxa/video/upload/v1650292747/Liz_Phair_-_Why_Can_t_I__Official_Video_qt2ako.mp4"
            },
            {
                track: "Drums",
                file: "https://res.cloudinary.com/dezy11bxa/video/upload/v1650292747/Liz_Phair_-_Why_Can_t_I__Official_Video_qt2ako.mp4"
            },
            {
                track: "Vocals",
                file: "https://res.cloudinary.com/dezy11bxa/video/upload/v1650292747/Liz_Phair_-_Why_Can_t_I__Official_Video_qt2ako.mp4"
            },
            {
                track: "Instruments",
                file: "https://res.cloudinary.com/dezy11bxa/video/upload/v1650292747/Liz_Phair_-_Why_Can_t_I__Official_Video_qt2ako.mp4"
            },
            {
                track: "Bass",
                file: "https://res.cloudinary.com/dezy11bxa/video/upload/v1650292747/Liz_Phair_-_Why_Can_t_I__Official_Video_qt2ako.mp4"
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
    const world = await World.findOneAndUpdate({ description: "World 2 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" }, { currentSong: song })
}

seedDB().then(() => {
    mongoose.connection.close()
})