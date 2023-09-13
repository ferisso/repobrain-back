import ProjectsRepository from "../../repository/Projects/ProjectsRepository"
import { CustomError } from "../../service/CustomError"
import { IProjects } from "../../types/interfaces"

const ProjectsCase = {
  list: async function(id: string) {
    return await ProjectsRepository.list(id)
  },
  create: async function(team: IProjects) {

    const projectExists = await ProjectsRepository.listAll(team)

    if (!!projectExists.length) {
      throw CustomError({
        status: 400,
        msg: "Project already exists!"
      })
    }

    return await ProjectsRepository.create(team)
  },
  update: async function(team: IProjects) {
    return await ProjectsRepository.update(team)
  },
  delete: async function(id: string) {
    return await ProjectsRepository.delete(id)
  },
}

export default ProjectsCase