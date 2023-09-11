import UsersRepository from "../../repository/Users/UsersRepository"
import { CustomError } from "../../service/CustomError"
import { IUsers } from "../../types/interfaces"
import { hash } from "bcrypt"

const UsersCase = {
  list: async function(id?: string, query?: any) {
    if (id) {
      return await UsersRepository.listFirst(id)
    }
    return await UsersRepository.listAll(query)
  },
  create: async function(user: IUsers) {

    if (!user.name || user.name === "") {
      throw CustomError({
        status: 400,
        msg: "Name is required"
      })
    }

    if (!user.email || user.email === "") {
      throw CustomError({
        status: 400,
        msg: "E-mail is required"
      })
    }

    const userExists = await UsersRepository.listUnique(user.email)
    
    if (userExists) {
      throw CustomError({
        status: 400,
        msg: "This E-mail is already being used"
      })
    }

    if (user.password) {
      const hashedPassword = await hash(user.password, 8)
      return await UsersRepository.create({
        name: user.name,
        email: user.email,
        password: hashedPassword
      })
    }

    return await UsersRepository.create({
      name: user.name,
      email: user.email,
    })

  },
  update: async function(user: IUsers) {
    return await UsersRepository.update(user)
  },
  delete: async function (id: string) {
    return await UsersRepository.delete(id)
  }
}

export default UsersCase