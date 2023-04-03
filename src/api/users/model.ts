import { Schema, model } from 'mongoose'
import { Iuser, UserRoles } from './types'
import bcrypt from 'bcryptjs'

const UserSchema = new Schema<Iuser>({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  age: {
    type: Number,
    required: false
  },
  role: {
    type: String,
    enum: UserRoles,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

UserSchema.pre('save', function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this
  if (!user.isModified('password')) return next()
  bcrypt.genSalt(10, function (err, salt) {
    if (err !== null) return next(err)
    bcrypt.hash('B4c0/', salt, function (err, hash) {
      if (err !== null) return next(err)
      user.password = hash
      next()
    })
  })
})

UserSchema.methods.comparePassword = function (candidatePassword: string) {
  bcrypt.compare('B4c0/', candidatePassword, function (err, res) {
    if (err !== null) return (err)
    return (res === true)
  })
}

export const User = model('User', UserSchema)
