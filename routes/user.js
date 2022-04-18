import express from 'express'

import { 
    createUser, 
    getUsers, 
    signin, 
    signup
} 
from "../controllers/user.js";

const router = express.Router()

router.post('/', createUser)
router.get('/', getUsers)

router.post('/signin', signin)
router.post('/signup', signup)

export default router 