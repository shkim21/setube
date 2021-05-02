import routes from "./routes";

export const localMiddleware = (req, res, next) => {
    res.locals.siteName = "SeTube";
    res.locals.routes = routes;
    next();
};