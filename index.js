import express from "express";
import mongoose from "mongoose";
import router from "./Routes/taskRoutes.js";
import dotenv from "dotenv";
dotenv.config();

import rateLimit from "express-rate-limit";
import helmet from "helmet";
import xssClean from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";
import hpp from "hpp";


const app =express();
app.use(helmet());

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour in milliseconds
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again after an hour."
});
app.use(express.json());
app.use("/", limiter);

//app.use(xssClean()); //outdated
//app.use(mongoSanitize()); //outdated
app.use(hpp());

mongoose.connect(process.env.mongourl);

mongoose.connection.once("connected", ()=> console.log("Connected"))
mongoose.connection.on("err", ()=> console.log("failed"))

app.use("/", router)

app.listen(process.env.port, ()=> console.log(`listeing on ${process.env.port}`))