import World from '../models/World.js'
import Song from '../models/Song.js'

export const getWorlds = async (req, res) => {
    try {
        const worlds = await World.find()

        return res.status(200).json(worlds)
    } catch (error) {
        
        return res.status(500).json(error)
    }
}

export const getWorld = async (req, res) => {

    const { id } = req.params
    
    try {
        const world = await World.findById(id)

        return res.status(200).json(world)
    } catch (error) {
        
        return res.status(500).json(error)
    }
}

export const createWorld = async (req, res) => {
    const { referenceTracks, description, tags } = req.body 

    //Move out of function because I use it twice
    const currentIteration = {
        submissions: [],
        description: "Default",
        completeVotes: 0,
        bpm: 0,
        stems: [],
        scale: "",
        version: 0
    }

    const newSong = new Song({
        currentIteration
    })

    const newWorld =  new World({
        description,
        referenceTracks,
        tags,
        songs: []
    })

    try {

        const song = await newSong.save()
        const world = await newWorld.save()
        await world.update({
            currentSong: song._id
        })

        res.status(200).json("Success")
    } catch (error) {
        console.log(error)

        return res.status(500).json(error)
    }
}

export const completeCurrentSong = async (req, res) => {
    const { id } = req.params 

    const currentIteration = {
        submissions: [],
        description: "Default",
        completeVotes: 0,
        bpm: 0,
        stems: [],
        scale: "",
        version: 0
    }

    try {
        const world = await World.findById(id)
        world.songs.push(world.currentSong)

        const newSong = new Song({
            currentIteration
        })

        await newSong.save()

        world.currentSong = newSong._id

        world.save()

        res.status(200).json(world)
    } catch (error) {
        
        res.status(500).json(error)
    }
}

export const getSongs = async (req, res) => {

    const { id } = req.params

    try {
        const world = await World.findById(id)

        await world.populate('songs')

        return res.status(200).json(world.songs)
    } catch (error) {
        
        return res.status(500).json(error)
    }
}

export const getCurrentSong = async (req, res) => {

    const { id } = req.params
    
    try {

        const world = await World.findById(id)
        await world.populate({
            path: 'currentSong',
            populate: {
                path: 'currentIteration.submissions'
            }
        })

        const currentSong = world.currentSong
    
        return res.status(200).json(currentSong)
    } catch (error) {  
        console.log(error)  
        
        return res.status(500).json(error)
    }
}


