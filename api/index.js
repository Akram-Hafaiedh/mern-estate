import express from 'express'
import mongoose from 'mongoose';
import 'dotenv/config';
import users from './routes/userRouter.js';
import auth from './routes/authRouter.js';


mongoose.connect(process.env.DATABASE_URL).then(
    () => { console.log('🎟  - Connected to mongoDB  - 🎟 '); },
    err => { console.log('Intial Conection to mongoDB error:' + err); }
)

const app = express()

// default middleware
app.use(express.json());

app.use('/api/users', users);

app.use('/api/auth', auth);

app.listen(3000, () => {
    console.log("🚀 - Server is running on Port 3000! - 🚀 ");
})