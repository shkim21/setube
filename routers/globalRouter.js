import express from "express";
import routes from "../routes";

const globalRouter = express.Router();

//URL 사용하기. redirect하려고 할 때 전체구조를 기억할 필요가 없다
globalRouter.get(routes.home, (req, res) => res.send('Home'))
globalRouter.get(routes.join, (req, res) => res.send('Join'))
globalRouter.get(routes.login, (req, res) => res.send('Login'))
globalRouter.get(routes.logout, (req, res) => res.send('Logout'))
globalRouter.get(routes.search, (req, res) => res.send('Search'))

export default globalRouter;