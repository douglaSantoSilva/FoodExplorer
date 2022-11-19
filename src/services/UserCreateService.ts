import { AppErrors } from '../utils/AppErrors'
import { hash } from 'bcrypt'
import { UserRepository } from '../repositories/UserRepository'

type createUser = {
  name: string,
  password: string, 
  email:string
}

export class UserCreateService {
  userRepository: UserRepository
  
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async execute({name, email, password}: createUser) {

    if(!name || !email || !password) {
      throw new AppErrors("Preencha todos os campos para fazer o cadastro.")
    }

    const emailExist = await this.userRepository.findByEmail(email)
  
    if(emailExist) {
      throw new AppErrors("Este e-mail já está em uso.")
    }
  
    const hashedPassword = await hash(password, 8)
  
    const user = await this.userRepository.create({name, email, password: hashedPassword})

    return user
  }
}