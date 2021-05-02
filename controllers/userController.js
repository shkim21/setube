export const join = (req, res) => res.render('join', {pageTitle: "Join"}); // arrow fuction : 뒤에 오는 것이 return 값임
export const login = (req, res) => res.render('login', {pageTitle: "Login"});//변수를 템플릿에 전달하는 방식
export const logout = (req, res) => res.render('logout', {pageTitle: "Logout"});
export const userDetail = (req, res) => res.render('userDetail', {pageTitle: "User Detail"});
export const editProfile = (req, res) => res.render('editProfile', {pageTitle: "Edit Profile"});
export const changePassword = (req, res) => res.render('changePassword', {pageTitle: "Change Password"});
