import User from '../models/userModel.js'
import bcrypt from 'bcrypt';

export const signup = async (req, res) => {
    const { username, password, email } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    // const hashedPassword = async (password) => await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save();
    } catch (error) {
        res.status(500).json(error.message)
    }

    res.status(201).json('User added succesfully');
}