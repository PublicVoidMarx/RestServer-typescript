import express from 'express'
import {
  addDiarie,
  deleteDiarie,
  getDiaries,
  getDiariesById,
  getDiariesWithoutSensitiveInfo
} from './controller'

export const router = express.Router()

router.get('/', getDiaries)

router.get('/sensitive', getDiariesWithoutSensitiveInfo)

router.get('/:id', getDiariesById)

router.post('/', addDiarie)

router.delete('/:id', deleteDiarie)
