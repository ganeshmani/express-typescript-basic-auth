import express, { Express, Application, Request, Response } from "express";
import * as http from "http";
import cors from "cors";
import dotenv from "dotenv";

const app: Express = express();

dotenv.config({});

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8000;

if (process.env.DEBUG) {
  console.log("coming here");
  process.on("unhandledRejection", function (reason) {
    process.exit(1);
  });
} else {
}

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome world");
});

const server: http.Server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
