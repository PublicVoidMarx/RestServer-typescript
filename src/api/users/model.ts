import { Schema, model } from 'mongoose'
import { Iuser, UserRoles } from './types'

const userSchema = new Schema<Iuser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  role: { type: String, enum: UserRoles }
})

export const User = model('User', userSchema)
