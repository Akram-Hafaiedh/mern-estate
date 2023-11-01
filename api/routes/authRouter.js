import expres from 'express';
import { signin, signup } from '../controllers/authController.js';

const router = expres.Router();

//middleware

router.post('/signin', signin)

router.post('/signup', signup);

export default router