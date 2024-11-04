exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("messages", {
    id: { primaryKey: true, type: "serial" },
    chat_id: {
      type: "integer",
      notNull: true,
      references: "chats",
      onDelete: "CASCADE",
    },
    user_id: {
      type: "integer",
      notNull: true,
      references: "users",
      onDelete: "CASCADE",
    },
    message: { type: "TEXT", notNull: true },
    created_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("messages");
};
