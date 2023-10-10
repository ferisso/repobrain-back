import { Router } from "express";
import UsersController from "./controller/Users/UsersController";
import LoginController from "./controller/Login/LoginController";
import TeamsController from "./controller/Teams/TeamsController";
import ProjectsController from "./controller/Projects/ProjectsContoller";
import TeamMembersController from './controller/TeamMember/TeamMemberController'
import BoardsController from "./controller/Boards/BoardsController";

const routes = Router()

// users
routes.get('/users/:id', UsersController.get)
routes.get('/users', UsersController.get)
routes.post('/users', UsersController.post)
routes.put('/users', UsersController.put)
routes.delete('/users/:id', UsersController.delete)

// Teams
routes.get('/teams/:id', TeamsController.get)
routes.post('/teams', TeamsController.post)
routes.put('/teams', TeamsController.put)
routes.delete('/teams/:id', TeamsController.delete)

// projects
routes.get('/projects/:id', ProjectsController.get)
routes.post('/projects', ProjectsController.post)
routes.put('/projects', ProjectsController.put)
routes.delete('/projects/:id', ProjectsController.delete)

// Team Members
routes.get('/members/:id', TeamMembersController.get)
routes.post('/members', TeamMembersController.post)
routes.put('/members', TeamMembersController.put)
routes.delete('/members/:id', TeamMembersController.delete)

// Boards
routes.get('/boards/:id', BoardsController.getId)
routes.get('/boards', BoardsController.get)
routes.post('/boards', BoardsController.post)
routes.put('/boards', BoardsController.put)
routes.delete('/boards/:id', BoardsController.delete)

// login
routes.post('/login', LoginController.post)

export default routes