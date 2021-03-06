import routes from "../routes";

export const getJoin = (req, res) => {
    res.render("join", {pageTitle: "Join"}); // arrow fuction : 뒤에 오는 것이 return 값임
};

export const postJoin = (req, res) => {
    const {
        body: {name, email, password, password2}
    } = req;
    //status code : 인터넷이 서로 어떻게 상호작용하는지 표시하는 것
    //400: bad request
    if (password !== password2) {
        res.status(400);
        res.render("join", {pageTitle: "Join"});
    } else {
        //To Do: Register User
        //To Do: Log user in
        res.redirect(routes.home);
    }
    res.render("join", {pageTitle: "Join"});
};

export const getLogin = (req, res) => res.render('login', {pageTitle: "Log In"});//변수를 템플릿에 전달하는 방식
export const postLogin = (req, res) => {
    res.redirect(routes.home);
};

export const logout = (req, res) => {
    //To Do: Process Log Out
    res.redirect(routes.home);
};

export const userDetail = (req, res) => res.render('userDetail', {pageTitle: "User Detail"});
export const editProfile = (req, res) => res.render('editProfile', {pageTitle: "Edit Profile"});
export const changePassword = (req, res) => res.render('changePassword', {pageTitle: "Change Password"});
