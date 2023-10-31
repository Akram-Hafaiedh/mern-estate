import User from '../models/userModel.js'
import bcrypt from 'bcrypt';
import { handleError } from '../utils/error.js';

export const signup = async (req, res, next) => {
    const { username, password, email } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    // const hashedPassword = async (password) => await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save();
        res.status(201).json('User added succesfully');
    } catch (error) {
        // res.status(500).json(error.message)
        next(error);
        // next(handleError(501, 'Another error message'));
    }
}