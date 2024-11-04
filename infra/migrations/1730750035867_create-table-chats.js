exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createType("chat_type", ["PRIVATE", "PUBLIC"]);

  pgm.createTable("chats", {
    id: { primaryKey: true, type: "serial" },
    name: { type: "varchar(1000)", notNull: true },
    short_name: { type: "varchar(1000)", notNull: true, unique: true },
    type_chat: { type: "chat_type", notNull: true },
    is_active: { type: "boolean", notNull: true, default: true },
    created_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("chats");
  pgm.dropType("chat_type");
};
