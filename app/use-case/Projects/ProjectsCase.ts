import ProjectsRepository from "../../repository/Projects/ProjectsRepository"
import { IProjects } from "../../types/interfaces"

const ProjectsCase = {
  list: async function(id: string) {
    return await ProjectsRepository.list(id)
  },
  create: async function(team: IProjects) {
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