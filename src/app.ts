import express, { Request, Response } from "express";
const app = express();
import cors from "cors";

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Paperly Backend!");
});

export default app;
