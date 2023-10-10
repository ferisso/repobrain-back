import { Request, Response } from "express";
import BoardsCase from "../../use-case/Boards/BoardsCase";

const BoardsController = {
  async getId (req: Request, res: Response) {
    const id = req.params.id;
    const boards = await BoardsCase.listById(id);
    res.status(200).json(boards);
  },
  async get(req: Request, res: Response) {
    const query = req.query;
    const boards = await BoardsCase.listByQuery(query);
    res.status(200).json(boards);
  },
  async post(req: Request, res: Response) {
    const body = req.body;
    const boards = await BoardsCase.create(body);
    res.status(201).json(boards);
  },
  async put(req: Request, res: Response) {
    const body = req.body;
    const boards = await BoardsCase.update(body);
    res.status(200).json(boards);
  },
  async delete(req: Request, res: Response) {
    const id = req.params.id;
    const boards = await BoardsCase.delete(id);
    res.status(200).json(boards);
  },
};

export default BoardsController;
