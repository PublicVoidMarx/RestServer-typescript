
import { Request, Response } from 'express'
import { ControllerFunction } from '../types'
import { Diarie } from './model'

export const getDiaries: ControllerFunction = async (_req, res) => {
  try {
    const diaries = await Diarie.find()
    return res.send(diaries)
  } catch (error) {
    return res.send(error)
  }
}

export const getDiariesById: ControllerFunction = async (req: Request, res: Response): Promise<any> => {
  try {
    const diarie = await Diarie.findById(req.params.id)
    res.send(diarie)
  } catch (error) {
    res.send(error)
    throw new Error('getDiarie error')
  }
}

export const getDiariesWithoutSensitiveInfo: ControllerFunction = async (_req: Request, res: Response): Promise<any> => {
  try {
    const diaries = await Diarie.find().select({
      _id: 0,
      comment: 0,
      createdAt: 0,
      updatedAt: 0,
      __v: 0
    })
    res.send(diaries)
  } catch (error) {
    res.send(error)
    throw new Error('getDiaries error')
  }
}

export const addDiarie: ControllerFunction = async (req: Request, res: Response): Promise<any> => {
  const {
    weather,
    visibility,
    date,
    comment
  } = req.body
  try {
    const newDiarie = await Diarie.create({ weather, comment, date, visibility })
    await newDiarie.save()
    res.send(newDiarie)
  } catch (error) {
    res.send(error)
    throw new Error('addDiarie error')
  }
}

export const deleteDiarie: ControllerFunction = async (req: Request, res: Response): Promise<any> => {
  try {
    const deletedDiarie = await Diarie.findByIdAndDelete(req.params.id)
    if (deletedDiarie != null) {
      res.send(deletedDiarie)
    } else {
      res.send(`No diarie found with id: ${req.params.id}`)
    }
  } catch (error) {
    res.send(error)
    throw new Error('addDiarie error')
  }
}
