import { Request, Response} from 'express'

export class UsersController {
  create(request: Request, response: Response) {
    const { name, email, password } = request.body

    response.json({name, email, password})
  }
}
