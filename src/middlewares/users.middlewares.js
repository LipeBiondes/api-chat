const { getUserByPhone, getUserById } = require("../models/users.model");

const validateBodyCreateUser = async (req, res, next) => {
  const { name, phone } = req.body;

  if (!name || name === "" || name.length === 0) {
    return res.status(400).json({ message: "name is required" });
  }

  if (!phone || phone === "" || phone.length === 0) {
    return res.status(400).json({ message: "phone is required" });
  }

  const userExists = await getUserByPhone(phone);

  if (userExists.length > 0) {
    return res.status(409).json({ message: "User already exists" });
  }

  next();
};

const validateParamsGetUserByPhone = (req, res, next) => {
  const { phone } = req.params;

  if (!phone || phone === "" || phone.length === 0) {
    return res.status(400).json({ message: "phone is required" });
  }

  next();
};

const validateParamsGetUserById = (req, res, next) => {
  const { id } = req.params;

  if (!id || id === "" || id.length === 0) {
    return res.status(400).json({ message: "id is required" });
  }

  next();
};

const validateUserExists = async (req, res, next) => {
  const { id } = req.params;

  const user = await getUserById(id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  req.user = user;

  next();
};

const validateBodyUpdateUser = async (req, res, next) => {
  const { name } = req.body;

  if (!name || name === "" || name.length === 0) {
    return res.status(400).json({ message: "name is required" });
  }

  next();
};

module.exports = {
  validateParamsGetUserById,
  validateBodyCreateUser,
  validateParamsGetUserByPhone,
  validateUserExists,
  validateBodyUpdateUser,
};
