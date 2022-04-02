import express from "express"

import {
    getWorlds
} 
from '../controllers/world.js'

const router = express.Router()

router.get('/', getWorlds)

export default router