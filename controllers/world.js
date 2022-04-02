import World from '../models/World.js'

export const getWorlds = async (req, res) => {
    try {
        const worlds = await World.find()

        return res.status(200).json(worlds)
    } catch (error) {
        
        return res.status(400).json(error)
    }
}

export const getWorld = async (req, res) => {
    const { id } = req.params.id
    try {
        const world = await World.findById(id)

        return res.status(200).json(world)
    } catch (error) {
        
        return res.status(400).json(error)
    }
}