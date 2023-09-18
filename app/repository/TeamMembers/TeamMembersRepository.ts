

import { team_members, teams } from "@prisma/client"
import { prisma } from "../../prisma"

const TeamsRepository = {
  list: async function (id: string): Promise<team_members[]> {
    return await prisma.team_members.findMany({
      where: {
        team_id: id,
      }
    })
  },
  listQuery: async function (team: team_members) {
    return await prisma.team_members.findMany({
      where: {
        ...team
      }
    })
  },
  create: async function (member: team_members) {
    return await prisma.team_members.create({
      data: {
       team_id: member.team_id,
       user_id: member.user_id
      }
    })
  },
  update: async function(member: team_members) {
    return await prisma.team_members.update({
      data: {
        user_id: member.user_id
       },
       where: {
        id: member.id // team member id
       }
    })
  },
  delete: async function(id: string) {
    return await prisma.teams.delete({
      where: {
        id: id
      },
    })
  }
}

export default TeamsRepository