import { Router } from 'express'
import { getUsers } from './controller'

export const router = Router()

router.get('/', getUsers)
