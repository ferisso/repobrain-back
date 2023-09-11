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
  url: string,
  user_id: string,
  team_id: string
}
