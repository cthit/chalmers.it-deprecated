const getGroupsRouter = require("./groups.routers.js");
const getNewsRouter = require("./news.routers");
const {
    handleOAuthCode,
    handleGetMe,
    handleSignOut
} = require("../controllers/authentication.controller");

const authRouters = router => {
    router.post("/auth", handleOAuthCode);
    router.get("/me", handleGetMe);
    router.post("/sign-out", handleSignOut);
    return router;
};

const initRouters = (app, createRouter) => {
    app.use("/api", authRouters(createRouter()));
    app.use("/api", getGroupsRouter(createRouter()));
    app.use("/api", getNewsRouter(createRouter()));
};

module.exports = initRouters;
