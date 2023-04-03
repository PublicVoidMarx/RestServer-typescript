import { ControllerFunction } from '../types'
import { User } from './model'

export const getUsers: ControllerFunction = async (_req, res) => {
  try {
    const users = await User.find()
    return res.send(users)
  } catch (error) {
    return res.send(error)
  }
}
