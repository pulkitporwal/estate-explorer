import express from "express";
import path from "path";
import cookieParser from "cookie-parser";

const app = express();
const __dirname = path.resolve();

app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ limit: "20kb", extended: true }));
app.use(cookieParser());

import userRouter from "./routers/user.router.js";
app.use("/api/user", userRouter);

import authRouter from "./routers/auth.router.js";
app.use("/api/auth", authRouter);

import listingRouter from "./routers/listing.router.js";
app.use("/api/listing", listingRouter);

app.use(express.static(path.join(__dirname, "client/dist")));

app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

export default app;
