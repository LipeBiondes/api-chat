exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.addColumn("chats", {
    updated_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });
};

exports.down = (pgm) => {
  pgm.dropColumn("chats", "updated_at");
};
