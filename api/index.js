import express from 'express'
import mongoose from 'mongoose';
import 'dotenv/config'



mongoose.connect(process.env.DATABASE_URL).then(
    () => { console.log('🎟  - Connected to mongoDB  - 🎟 '); },
    err => { console.log('Intial Conection to mongoDB error:' + err); }
)

const app = express()



app.listen(3000, () => {
    console.log("🚀 - Server is running on Port 3000! - 🚀 ");
})