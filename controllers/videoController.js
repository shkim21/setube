import {videos} from "../db"
import routes from "../routes"

export const home = (req, res) => {
    res.render("home", { pageTitle: "Home", videos});//views 폴더에서 파일명이 home이고 확장자가 pug인 템플릿 파일을 찾은 후 보여줄거임
};

export const search = (req, res) => {
    const {
        query: { term: searchingBy }   //console.log(req.query.term);
    } = req;
    res.render("search", { pageTitle: "Search", searchingBy, videos });//template가 보여주도록. tab 창에 보임
};

export const getUpload = (req, res) => res.render("upload", {pageTitle: "Upload"});

export const postUpload = (req, res) => {
    const {
        body: {file, title, description}
    } = req;
    //To Do: Upload and save video
    res.redirect(routes.videoDetail(322432));
};

export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle: "Video Detail"});

export const editVideo = (req, res) => res.render("editVideo", {pageTitle: "Edit Video"});

export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle: "Delete Video"});