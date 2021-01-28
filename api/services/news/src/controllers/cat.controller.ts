import { to } from "../utils/utils";
import { queryGetCats } from "../repositories/cat.repository";

export const handleGetCats = query => async (req, res) => {
    const [rows, err] = await to(queryGetCats(query));
    err ? res.status(500).json(err) : res.status(200).json(rows);
};
