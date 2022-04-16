import Song from "../models/Song.js"

//! Fix error messages

export const updateSong = async (req, res) => {

    const updatedSong = req.body

    try {
        const song = await Song.findByIdAndUpdate(id, updatedSong)
    } catch (error) {
        
    }
}

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
        res.status(500).json(error)
    }
}

export const addSubmission = async (req, res) => {
    const { id } = req.params

    const submissionId = req.body

    try {
        const song = await Song.findById(id)

        song.currentIteration.submissions.push(submissionId)

        res.status(200).json(song.currentIteration)
    } catch (error) {

        res.status(500).json(error)
    }
}


//Really take a look at this
export const updateCurrentIteration = async (req, res) => {
    const { id } = req.params
    const iteration = req.body

    //Is there a more elegant solution?
    //Format submission to match iteration
    delete iteration._id 
    delete iteration.__v 
    delete iteration.votes
    delete iteration.createdAt
    delete iteration.updatedAt
    delete iteration.selected 
    iteration.submissions = []
    // iteration.version++


    try {
        const song = await Song.findById(id)

        //Format current iteration to be old iteration
        const oldIteration = {...song.currentIteration._doc}
        delete oldIteration._id
        delete oldIteration.updatedAt
        song.iterations.push(oldIteration)
        await song.save()

        iteration.version = oldIteration.version++
        song.currentIteration = iteration
        await song.save()

        res.status(200).json(song)
    } catch (error) {
        console.log(error)
        
        res.status(500).json("Whoops")
    }
}

export const voteCurrentIteration = async (req, res) => {
    const { id } = req.params 

    try {
        const song = await Song.findById(id)
        song.currentIteration.completeVotes++
        await song.save()

        res.status(200).json(song.currentIteration)
    } catch (error) {
        
        console.log(error)
        res.status(500).json('error')
    }
}
