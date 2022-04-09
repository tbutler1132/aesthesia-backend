import express from 'express'

import { 
    updateSubmission,
    createSubmission
} 
from "../controllers/submission.js";

const router = express.Router()

router.post('/', createSubmission)
router.patch('/:id', updateSubmission)

export default router