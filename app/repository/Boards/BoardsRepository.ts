

import { boards } from "@prisma/client"
import { prisma } from "../../prisma"

const BoardsRepository = {
  async listAllByFilters(boardFilters: boards) {
    return await prisma.boards.findMany({
      where: {
        ...boardFilters,
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
  async create(board: boards) {
    return await prisma.boards.create({
      data: {
        title: board.title,
        assignee: board.assignee,
        reporter: board.reporter,
        project_id: board.project_id,
        points: board.points,
        issue: board.issue,
        label: board.label
      }
    })
  },
  async update(board: boards) {
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
  async delete(boardId: string) {
    return await prisma.boards.delete({
      where: {
        id: boardId
      }
    })
  }
}

export default BoardsRepository