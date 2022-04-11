import express from 'express'
// const express = require('express')
import mongoose from 'mongoose'
// const mongoose = require('mongoose')
import cors from 'cors'
// const cors = require('cors')
import dotenv from 'dotenv'
dotenv.config()
import userRoutes from './routes/user.js'
import worldRoutes from './routes/world.js'
import submissionRoutes from './routes/submission.js'
import songRoutes from './routes/song.js'
import spotifyRoutes from './routes/spotify.js'
import Song from './models/Song.js'
import Submission from './models/Submission.js'


const mdb = process.env.MONGO_DB_URI


const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/users', userRoutes)
app.use('/worlds', worldRoutes)
app.use('/submissions', submissionRoutes)
app.use('/songs', songRoutes)
app.use('/spotify', spotifyRoutes)


const CONNECTION_URL = `${mdb}`

const PORT = process.env.PORT || 7000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

app.get('/', (req, res) => {
    res.send('I am running')
})

