import { Request, Response } from "express";
import LoginCase from "../../use-case/Login/LoginCase";

const LoginController = { 
  post: async function(req: Request, res: Response) {
    const body = req.body
    const userExists = await LoginCase.login(body)
    res.status(200).json(userExists)
  }
}

export default LoginController