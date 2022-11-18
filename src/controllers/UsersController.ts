import { Request, Response} from 'express'
import { AppErrors } from '../utils/AppErrors'

export class UsersController {
  create(request: Request, response: Response) {
    const { name, email, password } = request.body

    if(!name || !email || !password) {
      throw new AppErrors("Preencha todos os campos para fazer o cadastro.")
    }

    response.json({name, email, password})
  }
}
