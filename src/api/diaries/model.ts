import mongoose from 'mongoose'
import { Idiary, Visibility, Weather } from './types'
const { Schema } = mongoose

const diarieSchema = new Schema<Idiary>({
  comment: String,
  date: Date,
  visibility: { type: String, enum: Visibility },
  weather: { type: String, enum: Weather }
}, { timestamps: true })

export const Diarie = mongoose.model('Diarie', diarieSchema)
