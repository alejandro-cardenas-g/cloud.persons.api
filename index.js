import { config } from "dotenv";
config();

import express from "express";
import personRouter from "./route.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/persons", personRouter);

app.listen(process.env.PORT, () => {
  console.log(`persons.api listening on ${process.env.PORT}`);
});
