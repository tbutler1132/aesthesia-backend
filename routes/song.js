import express from 'express'

import { 
    createIterationComment,
    addSubmission
} 
from "../controllers/song.js";

const router = express.Router()

router.post('/:id/currentIteration/comments', createIterationComment)
router.patch('/:id/currentIteration/submissions', addSubmission)

export default router