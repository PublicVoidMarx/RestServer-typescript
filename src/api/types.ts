import { NextFunction, Request, Response } from 'express'

export interface CustomRequest<T> extends Request {
  body: T
}

export type ControllerFunction = (req: Request, res: Response, next?: NextFunction) => any
