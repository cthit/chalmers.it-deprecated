import express from "express";
import getQuery from "./setup/db.setup";
import bodyParser from "body-parser";
import initRoutes from "./routers";

const app: express.Application = express();

app.use(bodyParser.json());
initRoutes(app, getQuery(), () => express.Router());

app.listen(process.env.PORT, () => {
    console.log("News is now running on port " + process.env.PORT);
});
