import { Router } from 'express'
import { createUser, getUserById, getUsers } from './controller'

export const router = Router()

router.get('/', getUsers)
router.get('/:id', getUserById)
router.post('/', createUser)
