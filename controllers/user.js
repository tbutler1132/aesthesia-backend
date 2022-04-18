import User from '../models/User.js'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config()

const jwtSecret = process.env.JWT_TOKEN

export const signin = async (req, res) => {

    const {email, password} = req.body

    try {
        const existingUser = await User.findOne({email})

        if(!existingUser) return res.status(404).json("User does not exist")

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)

        console.log(isPasswordCorrect)

        if(!isPasswordCorrect) return res.status(400).json('Invalid Credentials')

        const token = jwt.sign({email: existingUser.email, _id: existingUser._id}, jwtSecret, {expiresIn: "1h"})

        return res.status(200).json({result: existingUser, token})
    } catch (error) {
        return res.status(500).json('Woops')
        
    }
}

export const signup = async (req, res) => {
    const {email, password, username} = req.body

    try {
        const existingUser = await User.findOne({email})

        if(existingUser) return res.status(400).json("User exists")

        const hashedPassword = await bcrypt.hash(password, 12)

        const result = await User.create({email, password: hashedPassword, username})

        const token = jwt.sign({email: result.email, _id: result._id}, jwtSecret, {expiresIn: "1h"})

        return res.status(200).json({result, token})
    } catch (error) { 
        console.log("ERROR", error)
        return res.status(500).json('Woops')
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await User.find()

        await User.populate(users, { path: 'world' })

        res.status(200).json(users)
    } catch (error) {
        console.log(error)

        res.status(500).json('Error')
    }
}

export const createUser = async (req, res) => {
    const {email, password, fullName, artistName } = req.body
    const newUser = new User({
        email,
        password,
        fullName,
        artistName
    });
    try {
        await newUser.save()
        return res.status(201).json(newUser)
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}
