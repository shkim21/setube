//const express = require('express'); //import express at node modules
import "core-js";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-Parser";
import { userRouter } from "./router";//default로 export한게 아님

const app = express(); //execute

//서버 생성
//const PORT = 4000;

/*
function handleListening(){
    console.log('Listening on: http://localhost:${PORT}');
}
*/
//const handleListening = () => console.log('Listening on: http://localhost:${PORT}');

const handleHome = (req, res) => res.send("Hello from my ass");

const betweenHome =(req, res, next) => {
    console.log("Between"); //middleware
    next();
}
const handleProfile = (req, res) => // 어떤 것을 요청했는지, 
    res.send("You are on my profile"); // 웹사이트로 동작하려면 html, css 파일을 send 해줘야 함

//route 생성
//app.use(betweenHome);// 순서가 중요함!
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extends: true}));
app.use(helmet());//보안
app.use(morgan("dev"));//log 기록 남겨줌

app.get("/", handleHome);// "/" : home

app.get("/profile", handleProfile);

app.use("/user", userRouter);

export default app;//누군가 내 파일을 불러올 때(import) app object를 주겠다