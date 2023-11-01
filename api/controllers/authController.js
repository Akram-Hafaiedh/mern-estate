import User from '../models/userModel.js'
import bcrypt from 'bcrypt';
import { handleError } from '../utils/error.js';
import jwt from 'jsonwebtoken';
import { userInfo } from 'os';


export const signup = async (req, res, next) => {
    const { username, password, email } = req.body;
    // console.log(req.body);
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

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    // console.log(req.body);
    try {
        const validUser = await User.findOne({ email });
        if (!validUser) return next(handleError(404, 'User not found!'));
        // console.log(password, validUser.password);
        const validPassword = bcrypt.compareSync(password, validUser.password);
        if (!validPassword) return next(handleError(401, 'Wrong credentials!'));
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        // const { password: pass, ...rest } = validUser
        // response : {
        //     "$__": {
        //         "activePaths": {
        //             "paths": {
        //                 ....
        //             },
        //             "states": {
        //                 ....
        //             }
        //         },
        //         "skipId": true
        //     },
        //     "$isNew": false,
        //     "_doc": {
        //         "_id": "65419fd1b2de474da8cd4ce3",
        //         "username": "catig",
        //         "email": "jonadityko@mailinator.com",
        //         "password": "$2b$10$hEPVct6VPnu4O4mQ/dTyI.m6MKSwWpxi/8jFUyRdALPGJxQozkwpq",
        //         "createdAt": "2023-11-01T00:46:09.093Z",
        //         "updatedAt": "2023-11-01T00:46:09.093Z",
        //         "__v": 0
        //     }
        // }
        const { password: pass, ...rest } = validUser._doc //remove password from the data
        //* this token is for 3days
        // res.cookie('access_token', 'Bearer' + token, { httpOnly: true, expries: new Date(Date.now() + 60 * 60 * 24 * 3) })
        res.cookie('access_token', 'Bearer' + token, { httpOnly: true })
            .status(200)
            // .json(validUser);
            .json(rest);
    } catch (error) {
        next(error);
        console.log(error);
    }
}