const express = require("express");

const {
  getUserByPhone,
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
  getUserById,
} = require("./controllers/users.controller");

const {
  validateParamsGetUserById,
  validateParamsGetUserByPhone,
  validateBodyCreateUser,
  validateUserExists,
  validateBodyUpdateUser,
} = require("./middlewares/users.middlewares");

const {
  getChatById,
  getAllChats,
  createChat,
  updateChat,
  deleteChat,
} = require("./controllers/chats.controller");

const {
  validateParamsGetChatById,
  validateBodyCreateChat,
  validateUpdatedChat,
  validateDeleteChatParams,
} = require("./middlewares/chats.middlewares");

const router = express.Router();

//users
router.get("/users", getAllUsers);
router.get("/user/phone/:phone", validateParamsGetUserByPhone, getUserByPhone);
router.get("/user/:id", validateParamsGetUserById, getUserById);
router.post("/user", validateBodyCreateUser, createUser);
router.put("/user/:id", validateUserExists, validateBodyUpdateUser, updateUser);
router.delete("/user/:id", validateUserExists, deleteUser);

//chats
router.get("/chat/:id", validateParamsGetChatById, getChatById);
router.get("/chats", getAllChats);
router.post("/chat", validateBodyCreateChat, createChat);
router.put("/chat/:id", validateUpdatedChat, updateChat);
router.delete("/chat/:id", validateDeleteChatParams, deleteChat);

module.exports = router;
