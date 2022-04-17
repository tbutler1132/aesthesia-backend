import Submission from "../models/Submission.js"
import Song from "../models/Song.js"
import cloudinary from '../utils/cloudinary.js'


export const updateSubmission = async (req, res) => {

    const { id } = req.params 

    const updatedSubmission = req.body

    try {
        const submission = await Submission.findByIdAndUpdate(id, updatedSubmission, {new: true})

        res.status(200).json(submission)
    } catch (error) {
        
        res.status(500).json(error)
    }
}

export const createSubmission = async (req, res) => {

    const { songId } = req.query
    const { files } = req.body

    try {
        const uploadedResponse = await cloudinary.uploader.upload(files, "dev_setups", {
            resource_type: "video"
        })
        const { secure_url } = uploadedResponse
    } catch (error) {
        

    }




    // const { 
    //     bpm,
    //     description,
    //     scale,
    //     stems
    //  } = req.body

    // const submission = new Submission({
    //     bpm,
    //     description,
    //     scale,
    //     stems
    // })
    
    // try {

    //     const newSubmission = await submission.save()

    //     const song = await Song.findById(songId)

    //     song.currentIteration.submissions.push(newSubmission._id)

    //     await song.save()

    //     res.status(200).json(submission)
        
    // } catch (error) {
    //     console.log(error)

    //     res.status(500).json('Error', error)    
    // }
}