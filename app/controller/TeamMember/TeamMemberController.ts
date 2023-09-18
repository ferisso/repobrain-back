import { Request, Response } from "express"
import TeamMembersCase from "../../use-case/TeamMembers/TeamMembersCase"


const TeamsController = {
  get: async function (req: Request, res: Response) {
    const id = req.params.id
    const members = await TeamMembersCase.list(id)
    res.status(200).json(members)
  },
  post: async function (req: Request, res: Response) {
    const body = req.body
    const members = await TeamMembersCase.create(body)
    res.status(201).json(members)
  },
  put: async function (req: Request, res: Response) {
    const body = req.body
    const members = await TeamMembersCase.update(body)
    res.status(200).json(members)
  },
  delete: async function (req: Request, res: Response) {
    const id = req.params.id
    const members = await TeamMembersCase.delete(id)
    res.status(200).json(members)
  },
}

export default TeamsController