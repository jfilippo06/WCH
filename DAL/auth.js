const AppError = require("../errors/appErrors");
const bcrypt = require("bcrypt");
const { User } = require("../models");

const loginUser = async (userName, password) => {
  const user = await User.findOne({
    where: {
      userName: userName,
    },
    paranoid: false,
  });
  if (!user) throw new AppError("Usuario no existe", 404);
  if (!bcrypt.compareSync(password, user.password))
    throw new AppError("Contraseña no valida", 404);
  return user;
};

const registerUser = async (email, userName, hash, roleId) => {
  const user = await User.findOne({
    where: {
      email: email,
    },
  });
  if (user) throw new AppError("Usuario ya existe", 200);
  await User.create({
    email,
    userName,
    password: hash,
    RoleId: roleId,
  });
};

module.exports = {
  loginUser,
  registerUser,
};
