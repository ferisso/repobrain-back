import { team_members } from "@prisma/client"
import TeamMembersRepository from "../../repository/TeamMembers/TeamMembersRepository"
import { prisma } from "../../prisma"

const TeamsCase = {
  list: async function(id: string) {
    return await TeamMembersRepository.list(id)
  },
  create: async function(team: team_members) {
    
    const userExists = await TeamMembersRepository.listQuery(team)
    if (userExists && userExists.length) {
      return
    }
    
    return await TeamMembersRepository.create(team)
  },
  update: async function(team: team_members) {
    return await TeamMembersRepository.update(team)
  },
  delete: async function(id: string) {
    return await TeamMembersRepository.delete(id)
  },
}

export default TeamsCase