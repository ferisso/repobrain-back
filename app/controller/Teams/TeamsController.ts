import { Request, Response } from "express"
import TeamsCase from "../../use-case/Teams/TeamsCase"


const TeamsController = {
  get: async function (req: Request, res: Response) {
    const id = req.params.id
    const teams = await TeamsCase.list(id)
    res.status(200).json(teams)
  },
  post: async function (req: Request, res: Response) {
    const body = req.body
    const teams = await TeamsCase.create(body)
    res.status(201).json(teams)
  },
  put: async function (req: Request, res: Response) {
    const body = req.body
    const teams = await TeamsCase.update(body)
    res.status(200).json(teams)
  },
  delete: async function (req: Request, res: Response) {
    const id = req.params.id
    const teams = await TeamsCase.delete(id)
    res.status(200).json(teams)
  },
}

export default TeamsController