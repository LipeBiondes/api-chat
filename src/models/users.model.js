const database = require("../../infra/database");

const getUserById = async (id) => {
  const user = await database.query({
    text: "SELECT * FROM users WHERE id = $1",
    values: [id],
  });

  return user.rows[0];
};

const getAllUsers = async () => {
  const users = await database.query({
    text: "SELECT * FROM users",
  });

  return users.rows;
};

const getUserByPhone = async (phone) => {
  const user = await database.query({
    text: "SELECT * FROM users WHERE phone = $1",
    values: [phone],
  });

  return user.rows;
};

const createUser = async (name, phone) => {
  await database.query({
    text: "INSERT INTO users (name, phone) VALUES ($1, $2)",
    values: [name, phone],
  });

  const user = await database.query({
    text: "SELECT id FROM users WHERE phone = $1",
    values: [phone],
  });

  const userId = user.rows[0].id;

  return userId;
};

const updateUser = async (name, id) => {
  const updatedAt = new Date();

  await database.query({
    text: "UPDATE users SET name = $1, updated_at = $2 WHERE id = $3",
    values: [name, updatedAt, id],
  });
};

const deleteUser = async (id) => {
  await database.query({
    text: "DELETE FROM users WHERE id = $1",
    values: [id],
  });
};

module.exports = {
  getUserById,
  getUserByPhone,
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
};
