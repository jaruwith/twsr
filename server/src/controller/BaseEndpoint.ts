import express, { Application, Request, Response } from "express";
import NostraRouter from "./NostraEndpoint";

const router: Application = express();
const PORT = 8000;
const Route: string = "/api";

router.get(Route, (req: Request, res: Response) => {
  res.send("Nostra Api Hackathon");
});

router.use(`${Route}/Nostra`, NostraRouter);

router.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}/api`);
});
