import { Request, Response } from "express"
import BoardsCase from "../../use-case/Boards/BoardsCase"


const BoardsController = {
  get: async function (req: Request, res: Response) {
    const id = req.params.id
    const boards = await BoardsCase.list(id)
    res.status(200).json(boards)
  },
  post: async function (req: Request, res: Response) {
    const body = req.body
    const boards = await BoardsCase.create(body)
    res.status(201).json(boards)
  },
  put: async function (req: Request, res: Response) {
    const body = req.body
    const boards = await BoardsCase.update(body)
    res.status(200).json(boards)
  },
  delete: async function (req: Request, res: Response) {
    const id = req.params.id
    const boards = await BoardsCase.delete(id)
    res.status(200).json(boards)
  },
}

export default BoardsController