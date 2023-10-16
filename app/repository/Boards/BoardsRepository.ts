

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
      },
      orderBy: {
       priority: 'desc' 
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
        description: board.description,
        assignee: board.assignee,
        reporter: board.reporter,
        project_id: board.project_id,
        priority: board.priority,
        points: board.points,
        issue_id: board.issue_id,
        issue_url: board.issue_url,
        label: board.label
      }
    })
  },
  async update(board: boards) {
    return await prisma.boards.update({
      data: {
        title: board?.title,
        description: board?.description,
        assignee: board?.assignee,
        reporter: board?.reporter,
        project_id: board?.project_id,
        priority: board?.priority,
        points: board?.points,
        issue_id: board?.issue_id,
        issue_url: board?.issue_url,
        status: board?.status,
        label: board?.label
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