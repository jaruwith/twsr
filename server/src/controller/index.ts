import express, { Application, Request, Response } from "express";
import TestServices from "../services/test/TestService";

const app: Application = express();
const PORT = 8000;

app.get("/", (req: Request, res: Response) => {
  res.send(TestServices.getTestDataDefault());
});

app.get("/2", (req: Request, res: Response) => {
  res.send(TestServices.getTestData("Exxpress + Ts "));
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
