import { Router } from "express";
import UsersController from "./controller/Users/UsersController";
import LoginController from "./controller/Login/LoginController";
import TeamsController from "./controller/Teams/TeamsController";
import ProjectsController from "./controller/Projects/ProjectsContoller";

const routes = Router()

// users
routes.get('/users/:id', UsersController.get)
routes.get('/users', UsersController.get)
routes.post('/users', UsersController.post)
routes.put('/users', UsersController.put)
routes.delete('/users/:id', UsersController.delete)

// projects
routes.get('/teams/:id', TeamsController.get)
routes.post('/teams', TeamsController.post)
routes.put('/teams', TeamsController.put)
routes.delete('/teams/:id', TeamsController.delete)

// projects
routes.get('/projects/:id', ProjectsController.get)
routes.post('/projects', ProjectsController.post)
routes.put('/projects', ProjectsController.put)
routes.delete('/projects/:id', ProjectsController.delete)

// login
routes.post('/login', LoginController.post)

export default routes