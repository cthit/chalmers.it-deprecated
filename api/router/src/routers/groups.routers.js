const axios = require("axios");
const { getUserConfig } = require("../utils/gamma");

module.exports = getGroupsRouter = router => {
    router.get("/groups", (req, res) => {
        axios
            .get("http://groups:8080/groups", getUserConfig(req))
            .then(response => {
                res.status(200).send(response.data);
            })
            .catch(error => {
                res.status(500).send("nope");
                console.log(error);
            });
    });
    return router;
};
