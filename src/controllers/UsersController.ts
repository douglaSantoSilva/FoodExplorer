import { Request, Response} from 'express'
import { UserRepository } from '../repositories/UserRepository'
import { UserCreateService } from '../services/UserCreateService' 

export class UsersController {
  async create(request: Request, response: Response) {
    const { name, email, password } = request.body

    const userRepository = new UserRepository()
    const userCreateService = new UserCreateService(userRepository)


   const userId = userCreateService.execute({name, email, password})
    
    response.status(201).json({userId})
  }
}
