const chatsModel = require("../models/chats.model");
const generateShortName = require("../utils/genereateShortNameUnique");

const getChatById = async (req, res) => {
  const { id } = req.params;

  const chat = await chatsModel.getChatById(id);

  if (!chat) {
    return res.status(404).json({ message: "chat not found" });
  }

  return res.status(200).json({ chat });
};

const getAllChats = async (req, res) => {
  const chats = await chatsModel.getAllChats();

  if (!chats) {
    return res.status(404).json({ message: "chats not found" });
  }

  return res.status(200).json({ chats });
};

const createChat = async (req, res) => {
  let { name, typeChat } = req.body;

  typeChat = typeChat.toUpperCase();

  const shortName = generateShortName(name);

  const chatId = await chatsModel.createChat(name, shortName, typeChat);

  if (!chatId) {
    return res.status(400).json({ message: "error creating chat" });
  }

  return res.status(200).json({ chatId });
};

const updateChat = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  let { typeChat, isActive } = req.body;

  if (typeChat === undefined && isActive === undefined) {
    const chat = await chatsModel.getChatById(id);

    await chatsModel.updateChat(id, name, chat.type_chat, chat.is_active);

    return res.status(204).json();
  }

  if (typeChat === undefined && isActive !== undefined) {
    const chat = await chatsModel.getChatById(id);

    await chatsModel.updateChat(id, name, chat.type_chat, isActive);

    return res.status(204).json();
  }

  if (isActive === undefined && typeChat !== undefined) {
    typeChat = typeChat.toUpperCase();

    const chat = await chatsModel.getChatById(id);

    await chatsModel.updateChat(id, name, typeChat, chat.is_active);

    return res.status(204).json();
  }

  typeChat = typeChat.toUpperCase();

  await chatsModel.updateChat(id, name, typeChat, isActive);

  return res.status(204).json();
};

const deleteChat = async (req, res) => {
  const { id } = req.params;

  await chatsModel.deleteChat(id);

  return res.status(204).json();
};

module.exports = {
  getChatById,
  getAllChats,
  createChat,
  updateChat,
  deleteChat,
};
