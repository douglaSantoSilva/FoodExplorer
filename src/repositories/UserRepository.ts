import { knexConnection } from '../database/knex/index'

type createUser = {
  name: string,
  password: string, 
  email:string
}

export class UserRepository{
  async findByEmail(email: string) {

  const user = await knexConnection
  .select("email")
  .from("users")
  .where({ email }).first()

  return user
  }

  async create({ name, password, email }: createUser) {
  const userId =  await knexConnection("users")
  .insert({name, password, email})
    
  return {id: userId}
}
}