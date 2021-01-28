import { queryFunction } from "../setup";

export const queryGetCats = (query: queryFunction) =>
    query("SELECT * FROM cat", [], res => res.rows);
