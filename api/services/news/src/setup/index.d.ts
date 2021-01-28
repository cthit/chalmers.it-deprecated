import pg from "pg";

export type queryFunction = (
    sql: string,
    values: any[],
    convertResult?: (res: pg.QueryResult<any>) => any
) => Promise<unknown>;
