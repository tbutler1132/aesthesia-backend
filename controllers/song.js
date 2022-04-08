import Song from "../models/Song.js"


export const createIterationComment = async (req, res) => {
    
    const { id } = req.params 

    const comment = req.body

    try {

        const song = await Song.findById(id) 

        song.currentIteration.comments.push(comment)

        await song.save()

        res.status(200).json(song.currentIteration.comments)
    } catch (error) {
        console.log(error)
        
    }
}