import ProjectsRepository from "../../repository/Projects/ProjectsRepository"
import { CustomError } from "../../service/CustomError"
import { IProjects } from "../../types/interfaces"

const ProjectsCase = {
  list: async function(id: string) {
    return await ProjectsRepository.list(id)
  },
  create: async function(project: IProjects) {

    const projectExists = await ProjectsRepository.listAll(project)

    if (!!projectExists.length) {
      throw CustomError({
        status: 400,
        msg: "Project already exists!"
      })
    }

    return await ProjectsRepository.create(project)
  },
  update: async function(project: IProjects) {
    return await ProjectsRepository.update(project)
  },
  delete: async function(id: string) {
    return await ProjectsRepository.delete(id)
  },
}

export default ProjectsCase