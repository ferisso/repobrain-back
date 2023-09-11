import { Request, Response } from "express"
import ProjectsCase from "../../use-case/Projects/ProjectsCase"


const ProjectsController = {
  get: async function (req: Request, res: Response) {
    const id = req.params.id
    const projects = await ProjectsCase.list(id)
    res.status(200).json(projects)
  },
  post: async function (req: Request, res: Response) {
    const body = req.body
    const projects = await ProjectsCase.create(body)
    res.status(201).json(projects)
  },
  put: async function (req: Request, res: Response) {
    const body = req.body
    const projects = await ProjectsCase.update(body)
    res.status(200).json(projects)
  },
  delete: async function (req: Request, res: Response) {
    const id = req.params.id
    const projects = await ProjectsCase.delete(id)
    res.status(200).json(projects)
  },
}

export default ProjectsController