import express from "express"

import {
    getWorlds,
    getWorld,
    getSongs,
    createWorld,
    getCurrentSong,
    completeCurrentSong
} 
from '../controllers/world.js'

const router = express.Router()

router.get('/', getWorlds)
router.post('/', createWorld)
router.get('/:id', getWorld)
router.get('/:id/songs', getSongs)
router.get('/:id/currentSong', getCurrentSong)
router.patch('/:id/currentSong/complete', completeCurrentSong)

export default router