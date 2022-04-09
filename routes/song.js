import express from 'express'

import { 
    createIterationComment,
    addSubmission,
    updateCurrentIteration
} 
from "../controllers/song.js";

const router = express.Router()

router.post('/:id/currentIteration', updateCurrentIteration)
router.post('/:id/currentIteration/comments', createIterationComment)
router.patch('/:id/currentIteration/submissions', addSubmission)

export default router