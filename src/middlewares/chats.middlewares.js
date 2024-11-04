const validateParamsGetChatById = (req, res, next) => {
  const { id } = req.params;

  if (!id || id === "" || id.length === 0) {
    return res.status(400).json({ message: "id is required" });
  }

  next();
};

const validateBodyCreateChat = (req, res, next) => {
  let { name, typeChat } = req.body;

  if (!name || name === "" || name.length === 0) {
    return res.status(400).json({ message: "name is required" });
  }

  if (!typeChat || typeChat === "" || typeChat.length === 0) {
    return res.status(400).json({ message: "typeChat is required" });
  }

  typeChat = typeChat.toUpperCase();

  if (typeChat !== "PRIVATE" && typeChat !== "PUBLIC") {
    return res
      .status(400)
      .json({ message: "typeChat must be PRIVATE or PUBLIC" });
  }

  next();
};

const validateUpdatedChat = (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;
  let { typeChat, isActive } = req.body;

  if (!name || name === "" || name.length === 0) {
    return res.status(400).json({ message: "name is required" });
  }

  if (!id || id === "" || id.length === 0) {
    return res.status(400).json({ message: "id is required" });
  }

  if (typeChat !== undefined) {
    if (typeChat === "" || typeChat.length === 0) {
      return res.status(400).json({ message: "typeChat is required" });
    }
    typeChat = typeChat.toUpperCase();

    if (typeChat !== "PRIVATE" && typeChat !== "PUBLIC") {
      return res
        .status(400)
        .json({ message: "typeChat must be PRIVATE or PUBLIC" });
    }
  }

  if (isActive !== undefined) {
    if (isActive === "" || isActive.length === 0) {
      return res.status(400).json({ message: "isActive is required" });
    }

    if (typeof isActive !== "boolean") {
      return res.status(400).json({ message: "isActive must be a boolean" });
    }
  }

  next();
};

const validateDeleteChatParams = (req, res, next) => {
  const { id } = req.params;

  if (!id || id === "" || id.length === 0) {
    return res.status(400).json({ message: "id is required" });
  }

  next();
};

module.exports = {
  validateParamsGetChatById,
  validateBodyCreateChat,
  validateUpdatedChat,
  validateDeleteChatParams,
};
