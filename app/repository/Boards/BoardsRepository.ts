

import { boards } from "@prisma/client"
import { prisma } from "../../prisma"

interface IProject {
  id?: string
  name: string,
  url: string,
  user_id: string,
  team_id: string
}

const BoardsRepository = {
  list: async function (projectId: string) {
    return await prisma.boards.findMany({
      where: {
        project_id: projectId
      }
    })
  },
  create: async function (board: boards) {
    return await prisma.boards.create({
      data: board
    })
  },
  update: async function(board: boards) {
    return await prisma.boards.update({
      data: board,
      where: {
        id: board.id
      }
    })
  },
  delete: async function(boardId: string) {
    return await prisma.boards.delete({
      where: {
        id: boardId
      }
    })
  }
}

export default BoardsRepository