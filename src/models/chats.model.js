const database = require("../../infra/database");

const getChatById = async (id) => {
  const chat = await database.query({
    text: "SELECT * FROM chats WHERE id = $1",
    values: [id],
  });

  return chat.rows[0];
};

const getAllChats = async () => {
  const chats = await database.query({
    text: "SELECT * FROM chats WHERE type_chat = $1 AND is_active = $2 ORDER BY created_at DESC LIMIT 20",
    values: ["PUBLIC", true],
  });

  return chats.rows;
};

const createChat = async (name, shortName, typeChat) => {
  await database.query({
    text: "INSERT INTO chats (name,short_name, type_chat) VALUES ($1, $2, $3)",
    values: [name, shortName, typeChat],
  });

  const chat = await database.query({
    text: "SELECT id FROM chats WHERE short_name = $1",
    values: [shortName],
  });

  const chatId = chat.rows[0].id;

  return chatId;
};

const updateChat = async (id, name, typeChat, isActive) => {
  const updatedAt = new Date();

  await database.query({
    text: "UPDATE chats SET name = $1, type_chat = $2, is_active = $3, updated_at = $4 WHERE id = $5",
    values: [name, typeChat, isActive, updatedAt, id],
  });
};

const deleteChat = async (id) => {
  await database.query({
    text: "DELETE FROM chats WHERE id = $1",
    values: [id],
  });
};

module.exports = {
  getChatById,
  getAllChats,
  createChat,
  updateChat,
  deleteChat,
};
