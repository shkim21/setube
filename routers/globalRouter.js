import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import { getJoin, getLogin, postLogin, logout, postJoin } from "../controllers/userController";

const globalRouter = express.Router();

//URL 사용하기. redirect하려고 할 때 전체구조를 기억할 필요가 없다
globalRouter.get(routes.join,  getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);


globalRouter.get(routes.home, home);//(req, res) => res.send('Home'))
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, logout);


export default globalRouter;