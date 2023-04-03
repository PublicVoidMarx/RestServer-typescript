import { ControllerFunction, CustomRequest } from '../types'
import { User } from './model'
import { Iuser } from './types'

export const getUsers: ControllerFunction = async (_req, res) => {
  try {
    const users = await User.find()
    return res.send(users)
  } catch (error) {
    return res.send(error)
  }
}

export const getUserById: ControllerFunction = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (user != null) {
      return res.send(user)
    } else {
      return res.send(`User not found with id: ${req.params.id}`)
    }
  } catch (error) {
    return res.send(error)
  }
}

export const createUser: ControllerFunction = async (req: CustomRequest<Iuser>, res) => {
  const { firstName, lastName, password, email, role, age } = req.body
  try {
    const newUser = await User.create({ firstName, lastName, fullName: `${firstName} ${lastName}`, password, email, role, age })
    await newUser.save()
    return res.send(newUser)
  } catch (error) {
    return res.send(error)
  }
}

export const updateUser: ControllerFunction = async (req: CustomRequest<Iuser>, res) => {
  const { age, email, firstName, lastName, password } = req.body
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, { age, email, firstName, lastName, fullName: `${firstName} ${lastName}`, password })
    if (updatedUser != null) {
      return res.send(updatedUser)
    } else {
      return res.send(`No user found with id: ${req.params.id}`)
    }
  } catch (error) {
    return res.send(error)
  }
}

export const deleteUser: ControllerFunction = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id)
    if (deletedUser !== null) {
      return res.send(deletedUser)
    } else {
      return res.send(`No user found with id:${req.params.id}`)
    }
  } catch (error) {
    return res.send(error)
  }
}
