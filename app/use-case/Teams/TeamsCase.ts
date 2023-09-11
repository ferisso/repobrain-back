import TeamsRepository from "../../repository/Teams/TeamsRepository"
import { ITeam } from "../../types/interfaces"

const TeamsCase = {
  list: async function(id: string) {
    return await TeamsRepository.list(id)
  },
  create: async function(team: ITeam) {
    return await TeamsRepository.create(team)
  },
  update: async function(team: ITeam) {
    return await TeamsRepository.update(team)
  },
  delete: async function(id: string) {
    return await TeamsRepository.delete(id)
  },
}

export default TeamsCase