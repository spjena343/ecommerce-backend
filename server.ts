import express, { Express, Request, Response } from "express";
const app: Express = express();
const port = process.env.PORT || 4000;
const router = express.Router();
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

//middlewares
app.use(express.json());
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Importing Routes
const product = require("./Routes/Product")

//Using Routes
app.use("/api/v1", product);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});