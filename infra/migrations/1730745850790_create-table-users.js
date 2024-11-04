exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("users", {
    id: { primaryKey: true, type: "serial" },
    name: { type: "varchar(1000)", notNull: true },
    phone: { type: "varchar(1000)", notNull: true, unique: true },
    created_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
    updated_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("users");
};
