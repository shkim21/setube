//const express = require('express'); //import express at node modules
//import "core-js";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-Parser";
//import { userRouter } from "./router";//default로 export한게 아님
import { localMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

const app = express(); //execute express 실행한 결과를 상수로 만듬

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
//const handleProfile = (req, res) => // 어떤 것을 요청했는지, 
//    res.send("You are on my profile"); // 웹사이트로 동작하려면 html, css 파일을 send 해줘야 함

//route 생성
//app.use(betweenHome);// 순서가 중요함!
app.use(helmet());//보안
app.set("view engine", "pug");
app.use(cookieParser());
app.use(express.json());//페이지에서 가입할 때 전송한 정보를 볼 수 있게 해줌. 가져올 수 있음.
app.use(express.urlencoded({extends: true}));
app.use(morgan("dev"));//log 기록 남겨줌
app.use(localMiddleware);//전역 범위에 변수 추가

app.use(function (req, res, next) {
    res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' https://archive.org"
    );
    return next();
    });

//유일하게 독점적으로 URL을 다루는 방법
app.use(routes.home, globalRouter);//join, search, 
app.use(routes.users, userRouter);//router를 이용해서 쪼갤 수 있음
app.use(routes.videos, videoRouter);

export default app;//누군가 내 파일을 불러올 때(import) app object를 주겠다