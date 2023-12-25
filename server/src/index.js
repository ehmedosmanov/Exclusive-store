import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { authRouter } from "./routes/authRouter.js";
import { userRouter } from "./routes/userRouter.js";
const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());


app.use('/api', authRouter)
app.use('/api', userRouter)

const port = process.env.PORT || 8000;
const URL = process.env.CONNECTION_URL.replace(
  "<password>",
  process.env.PASSWORD
);

mongoose.connect(URL).catch((err) => console.log(err));

app.listen(port, (req, res) => {
  console.log("listening on port");
});
