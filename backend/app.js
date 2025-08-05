import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./db/db.js";
import userRouter from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import captainRouter from "./routes/captain.routes.js";

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/users", userRouter);
app.use("/api/captains", captainRouter);
export default app;
