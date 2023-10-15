import { boards } from "@prisma/client";
import BoardsRepository from "../../repository/Boards/BoardsRepository";
import { CustomError } from "../../service/CustomError";
import { IAllowedStatus } from "../../types/interfaces";

const allowedStatus: any = {
  BLOCKED: 0,
  TODO: 1,
  INPROGRESS: 2,
  CODE: 3,
  READY: 4,
  DONE: 5,
};

const boardStatusCase = (board: string): number => {
  const status = allowedStatus[board];

  if (!status) {
    return 0;
  }
  return status;
};

const BoardsCase = {
  async listById(id: string) {
    let boards = await BoardsRepository.listBoardInfo(id);
    const returnedBoards = boards.map((board) => {
      return {
        ...board,
        onBoardStatus: boardStatusCase(board.status),
      };
    });
    return returnedBoards;
  },

  async listByQuery(query: any) {
    let boards = await BoardsRepository.listAllByFilters(query)
    const returnedBoards = boards?.map((board) => {
      return {
        ...board,
        onBoardStatus: boardStatusCase(board.status),
      };
    });
    return returnedBoards;
  },

  async create(board: boards) {
    board.status = "TODO";
    if (!board.priority) {
      board.priority = 0
    }
    return await BoardsRepository.create(board);
  },

  async update(board: boards) {
    if (board.status) {
      const statusList = Object.keys(allowedStatus);
  
      const allowed = statusList.find(
        (status, index) => index == Number(board.status)
      );
  
      if (!allowed) {
        throw CustomError({
          msg: "Provide de right status",
          status: 400,
        });
      }
      board.status = allowed;
    }

    return await BoardsRepository.update(board);
  },

  async delete(id: string) {
    return await BoardsRepository.delete(id);
  },
};

export default BoardsCase;
