const usersModel = require("../models/users.model");
const removeCaracter = require("../utils/removeCaracterToNumber");

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await usersModel.getUserById(id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.status(200).json({ user });
};

const getAllUsers = async (req, res) => {
  const users = await usersModel.getAllUsers();

  if (!users.length) {
    return res.status(404).json({ message: "Users not found" });
  }

  const usersFormated = users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      phone: user.phone.replace(/(\d{2})(\d{6})(\d{4})/, "+$1 $2-$3"),
      createdAt: user.created_at,
      updatedAt: user.updated_at,
    };
  });

  return res.status(200).json({ users: usersFormated });
};

const getUserByPhone = async (req, res) => {
  const { phone } = req.params;

  const phoneFormated = removeCaracter(phone);

  const user = await usersModel.getUserByPhone(phoneFormated);

  if (user.length === 0) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.status(200).json({ user });
};

const createUser = async (req, res) => {
  const { name, phone } = req.body;

  const userId = await usersModel.createUser(name, phone);

  if (userId.length === 0) {
    return res.status(400).json({ message: "error creating user" });
  }

  return res.status(204).json({ userId });
};

const updateUser = async (req, res) => {
  let { id } = req.params;
  const { name } = req.body;

  await usersModel.updateUser(name, id);

  return res.status(204).json({ message: "User updated" });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  await usersModel.deleteUser(id);

  return res.status(204).json({ message: "User deleted" });
};

module.exports = {
  getUserById,
  getUserByPhone,
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
};
