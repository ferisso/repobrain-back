import { compare } from "bcrypt"
import UsersRepository from "../../repository/Users/UsersRepository"
import { CustomError } from "../../service/CustomError"

interface ILoginInterface {
  email: string,
  password: string
}

const LoginCase = {
  login: async function(data: ILoginInterface) {
    if (!data.email || data.email === "") {
      throw CustomError({
        status: 400,
        msg: "E-mail is required"
      })
    }

    if (!data.password || data.password === "") {
      throw CustomError({
        status: 400,
        msg: "Password is required"
      })
    }

    const userExists = await UsersRepository.listUnique(data.email)

    if (!userExists || !userExists.password) {
      throw CustomError({
        status: 400,
        msg: "E-mail or password invalid!"
      })
    }

    const isSamePassword = await compare(data.password, userExists.password)

    if (!isSamePassword) {
      throw CustomError({
        status: 400,
        msg: "E-mail or password invalid!"
      })
    }

    const user: any = userExists // xunxo
    delete user.password

    return user
  }
}

export default LoginCase