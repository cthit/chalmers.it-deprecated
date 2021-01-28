const axios = require("axios");
const { to } = require("../utils");
const { getUserConfig, getGammaUser } = require("../utils/gamma");

const newsBase = "http://news:5000/api";

const handleGetPosts = async (req, resp) => {
    const [err, res] = await to(axios.get(`${newsBase}/posts`));
    err
        ? resp.status(err.response.status).json(err.response.data)
        : resp.status(res.status).json(res.data);
};

const handleCreatePost = async (req, resp) => {
    const [err, res] = await to(
        axios.post(
            `${newsBase}/posts`,
            { ...req.body, user_id: getGammaUser(req) },
            getUserConfig(req)
        )
    );
    err
        ? resp.status(err.response.status).json(err.response.data)
        : resp.status(res.status).json(res.data);
};

const handleUpdatePost = async (req, resp) => {
    const [err, res] = await to(
        axios.put(
            `${newsBase}/posts`,
            { ...req.body, user_id: getGammaUser(req) },
            getUserConfig(req)
        )
    );
    err
        ? resp.status(err.response.status).json(err.response.data)
        : resp.status(res.status).json(res.data);
};

module.exports = getNewsRouter = router => {
    router.get("/news", handleGetPosts);
    router.post("/news", handleCreatePost);
    router.put("/news", handleUpdatePost);
    return router;
};
