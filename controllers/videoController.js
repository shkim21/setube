export const home = (req, res) => res.render("home", { pageTitle: "Home"});//views 폴더에서 파일명이 home이고 확장자가 pug인 템플릿 파일을 찾은 후 보여줄거임

export const search = (req, res) => {
    const {
        query: { term: searchingBy }   //console.log(req.query.term);
    } = req;
    res.render("search", {pageTitle: "Search", searchingBy});//template가 보여주도록. tab 창에 보임
};

export const videos = (req, res) => res.render("videos", {pageTitle: "Videos"});

export const upload = (req, res) => res.render("upload", {pageTitle: "Upload"});

export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle: "Video Detail"});

export const editVideo = (req, res) => res.render("editVideo", {pageTitle: "Edit Video"});

export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle: "Delete Video"});