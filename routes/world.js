import express from "express"

import {
    getWorlds,
    getWorld,
    getSongs
} 
from '../controllers/world.js'

const router = express.Router()

router.get('/', getWorlds)
router.get('/:id', getWorld)
router.get('/:id/songs', getSongs)

export default router