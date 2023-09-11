import { prisma } from "../../prisma"
import { IUsers } from "../../types/interfaces"

const UsersRepository = {
  listFirst: async function (id: string) {
    return await prisma.users.findFirst({
      where: {
        OR: [
          {id},
          {email: id}
        ]
      }
    })
  },
  listAll: async function (params?: IUsers) {
    return await prisma.users.findMany({
      where: {
        ...params
      }
    })
  },
  listUnique: async function (email: string) {
    return await prisma.users.findFirst({
      where: {
        email: email
      }
    })
  },
  create: async function (user: IUsers) {
    return await prisma.users.create({
      data: {
        ...user,
        status: 'ACTIVE'
      }
    })
  },
  update: async function (user: IUsers) {
    return await prisma.users.update({
      data: {
        ...user,
      },
      where: {
        id: user.id
      }
    })
  },
  delete: async function (id: string) {
    return await prisma.users.delete({
      where: {
        id
      }
    })
  },
}

export default UsersRepository