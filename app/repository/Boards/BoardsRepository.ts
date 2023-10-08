

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
      },
      include: {
        reporter_info: true,
        assignee_info: true
      } 
    })
  },
  async listBoardInfo(boardId: string) {
    return await prisma.boards.findMany({
      where: {
        id: boardId
      },
      include: {
        project: true,
        reporter_info: true,
        assignee_info: true
      } 
    })
  },
  create: async function (board: boards) {
    return await prisma.boards.create({
      data: {
        title: board.title,
        assignee: board.assignee,
        reporter: board.reporter,
        project_id: board.project_id,
        points: board.points,
        issue: board.issue,
      }
    })
  },
  update: async function(board: boards) {
    return await prisma.boards.update({
      data: {
        title: board.title,
        description: board.description,
        assignee: board.assignee,
        reporter: board.reporter,
        project_id: board.project_id,
        points: board.points,
        issue: board.issue,
        status: board.status
      },
      where: {
        id: board.id
      }
    })
    .catch(err => console.log(err))
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