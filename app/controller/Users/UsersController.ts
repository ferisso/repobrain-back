import { Request, Response } from "express";
import UsersCase from "../../use-case/Users/UsersCase";


const UsersController = {
  get: async function(req: Request, res: Response) {
    const id = req.params.id
    const query: any = req.query
    const user = await UsersCase.list(id, query)
    res.status(200).json(user)
  },
  post: async function (req: Request, res: Response) {
    const body = req.body
    const createdUser = await UsersCase.create(body)
    res.status(201).json(createdUser)
  },
  put: async function (req: Request, res: Response) {
    const body = req.body
    const updatedUser = await UsersCase.update(body)
    res.status(200).json(updatedUser)
  },
  delete: async function(req: Request, res: Response) {
    const id = req.params.id
    const user = await UsersCase.delete(id)
    res.status(200).json(user)
  },
}


export default UsersController