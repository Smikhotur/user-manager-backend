const UserModel = require("../models/UserSchema");

class UserService {
  async addUserId(users, newUser) {
    const userId = await users.map((user) => user.user_id);
    newUser.user_id = Math.max(...userId) + 1;
    return Math.max(userId);
  }

  async getAllUsers() {
    const users = await UserModel.find();
    return users;
  }
}

module.exports = new UserService();
