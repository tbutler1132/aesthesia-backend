import Submission from "../models/Submission.js"


export const updateSubmission = async (req, res) => {

    const { id } = req.params 

    console.log(id)

    const updatedSubmission = req.body

    console.log(updatedSubmission)

    try {
        const submission = await Submission.findByIdAndUpdate(id, updatedSubmission, {new: true})

        res.status(200).json(submission)
    } catch (error) {
        
        res.status(400).json(error)
    }
}