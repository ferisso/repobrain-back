export interface IUsers {
  id?: string
  name: string,
  email: string,
  password?: string,
  status?: string,
  image?: string,
}

export interface ICustomError {
  status: number,
  msg: string
}

export interface ITeam {
  id?: string,
  name: string,
  description: string,
  user_id: string,
}

export interface IProjects {
  id?: string
  name: string,
  owner_name: string,
  url: string,
  user_id: string,
  team_id: string
}

export interface IAllowedStatus {
  BLOCKED: number,
  TODO: number,
  INPROGRESS: number,
  CODE: number,
  READY: number,
  DONE: number
}

