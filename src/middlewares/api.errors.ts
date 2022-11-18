import { AppErrors } from '../utils/AppErrors'
import { Request, Response, NextFunction } from 'express'

export const errorMiddleware = (error: Error ,req: Request , res: Response, next: NextFunction) => {
  if(error instanceof AppErrors) {
    
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message
    })}

    console.log(error)
  
    return res.status(500).json({
      status: "error",
      message: "Internal server error."
    })
}