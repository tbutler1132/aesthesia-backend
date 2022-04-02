import User from '../models/User.js'

export const getUsers = async (req, res) => {
    try {
        const users = await User.find()

        console.log(users)
    } catch (error) {
        
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
