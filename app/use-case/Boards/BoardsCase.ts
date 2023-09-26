
import { boards } from "@prisma/client"
import BoardsRepository from "../../repository/Boards/BoardsRepository"
import { CustomError } from "../../service/CustomError"
import { IAllowedStatus } from "../../types/interfaces"

const allowedStatus: any = {
  BLOCKED: 0,
  TODO: 1,
  INPROGRESS: 2,
  CODE: 3,
  READY: 4,
  DONE: 5
}

const BoardsCase = {
  list: async function(id: string) {
    const boards = await BoardsRepository.list(id)

    const boardStatusCase = (board: string): number => {
      const status = allowedStatus[board]

      if (!status) {
        return 0
      }
      return status
    }

    const returnedBoards = boards.map(board => {
      return {
        ...board,
        onBoardStatus: boardStatusCase(board.status)
      }
    })

    return returnedBoards
  },
  create: async function(board: boards) {

    const isAllowedStatus: keyof IAllowedStatus = allowedStatus[board.status]

    if (!isAllowedStatus) {
      throw CustomError({
        status: 400,
        msg: "Provide the right status"
      })
    }

    return await BoardsRepository.create(board)
  },
  update: async function(board: boards) {
    return await BoardsRepository.update(board)
  },
  delete: async function(id: string) {
    return await BoardsRepository.delete(id)
  },
}

export default BoardsCase