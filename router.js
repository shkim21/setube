import express from "express";

export const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("user index"));
userRouter.get("/edit", (req, res) => res.send("user edit"));
userRouter.get("/password", (req, res) => res.send("user password"));
//모든 걸 작은 파일로 쪼개서 사용할 수 있게 해줌