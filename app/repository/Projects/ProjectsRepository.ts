import { prisma } from "../../prisma"

interface IProject {
  id?: string
  name: string,
  url: string,
  user_id: string,
  team_id: string
}

const ProjectsRepository = {
  list: async function (id: string) {
    return await prisma.projects.findMany({
      where: {
        user_id: id
      },
      include: {
        team: true,
      }
    })
  },
  listAll: async function (query: IProject) {
    return await prisma.projects.findMany({
      where: {
        ...query
      }
    })
  },
  create: async function (project: IProject) {
    return await prisma.projects.create({
      data: {
        name: project.name,
        url: project.url,
        user_id: project.user_id,
        team_id: project.team_id
      }
    })
  },
  update: async function(project: IProject) {
    return await prisma.projects.update({
      data: {
        name: project.name,
      },
      where: {
        id: project.id
      }
    })
  },
  delete: async function(id: string) {
    return await prisma.projects.delete({
      where: {
        id: id
      }
    })
  }
}

export default ProjectsRepository