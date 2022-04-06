import express from 'express'

import { 
    createIterationComment
} 
from "../controllers/song.js";

const router = express.Router()

router.post('/:id/currentIteration/comments', createIterationComment)

export default router