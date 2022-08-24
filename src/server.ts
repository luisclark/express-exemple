import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Router } from "express";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3335;
const router = Router();

router.get("/", (req, res) => {
  return res.status(200).json({ user: "ok" });
});

var corsOptions = {
  origin: process.env.WEBAPP_URL || "http://localhost:3333",
  optionsSuccessStatus: 200,
};

app.use(express.json());

app.use(cors(corsOptions));

app.use(router);

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
