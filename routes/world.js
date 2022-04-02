import express from "express"

import {
    getWorlds,
    getWorld
} 
from '../controllers/world.js'

const router = express.Router()

router.get('/', getWorlds)
router.get('/:id', getWorld)

export default router