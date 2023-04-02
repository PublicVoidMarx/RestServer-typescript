import express, { Request, RequestHandler, Response } from 'express'
import { addDiarie, deleteDiarie, getDiaries, getDiariesById, getDiariesWithoutSensitiveInfo } from './controller'

export const router = express.Router()

router.get('/', (async (req: Request, res: Response) => {
  await getDiaries(req, res)
  return res.status(200).send()
}) as RequestHandler)

router.get('/sensitive', (async (req: Request, res: Response) => {
  await getDiariesWithoutSensitiveInfo(req, res)
  return res.status(200).send()
}) as RequestHandler)

router.get('/:id', (async (req: Request, res: Response) => {
  await getDiariesById(req, res)
  return res.status(200).send()
}) as RequestHandler)

router.post('/', (async (req, res) => {
  await addDiarie(req, res)
  return res.status(200).send()
}) as RequestHandler)

router.delete('/:id', (async (req, res) => {
  await deleteDiarie(req, res)
  return res.status(200).send()
}) as RequestHandler)
