import mongoose from 'mongoose'
import { config } from 'dotenv'
config()

if (typeof process.env.MONGODB_URI !== 'undefined') {
  mongoose.connect(process.env.MONGODB_URI)
    .then(_db => console.log('Database conected'))
    .catch(err => console.log(err))
}
