import express, { Request, Response } from "express";
import { NostraService } from "../services";

const NostraRouter = express.Router();

NostraRouter.get(`/Categories`, async (req: Request, res: Response) => {
  return res.send(await NostraService.getCategory());
});

export default NostraRouter;
