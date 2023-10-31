import express from 'express';
import { test } from '../controllers/userController.js'

const router = express.Router();

//middleware
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

//testing api route coming from controller

router.get('/test', test);

export default router; 