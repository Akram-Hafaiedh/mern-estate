import expres from 'express';
import { signup } from '../controllers/singupController.js';

const router = expres.Router();

router.post('/signup', signup);

export default router