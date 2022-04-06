import express from 'express'

import { 
    updateSubmission
} 
from "../controllers/submission.js";

const router = express.Router()

router.patch('/:id', updateSubmission)

export default router