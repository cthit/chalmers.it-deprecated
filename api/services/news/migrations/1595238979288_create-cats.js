/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable("cat", {
        id: "id",
        name: {
            type: "string",
            notNull: true
        },
        image_url: {
            type: "string",
            notNull: true
        },
        created_at: {
            type: "timestamp",
            notNull: true,
            default: pgm.func("current_timestamp")
        }
    });
};

exports.down = pgm => {};
