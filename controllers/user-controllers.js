const User = require("../models/UserSchema");
const userServices = require("../services/user-services");

class UserController {
  async getUsers(req, res, next) {
    try {
      const users = await userServices.getAllUsers();
      return res.json(users);
    } catch (error) {
      next(error)
    }
  }

  async postUser(req, res) {
    try {
      const userCol = await User.find();
      const newUser = new User(req.body);
      userCol.length ? userServices.addUserId(userCol, newUser) : newUser.user_id = 1 
      const savedUser = await newUser.save();
      res.status(200).json(savedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async deleteUser(req, res) {
    try {
      await User.findOneAndDelete({
        user_id: req.params.idUser
      });
      res.status(200).json({message: 'User was deleted'});
    } catch (err) {
      res.status(500).json({message: 'There was an error deleting the user'});
    }
  }

  async updateInfoUser(req, res) {
    try {
      const filter = {user_id: req.params.idUser};
      const update = req.body;
      await User.updateOne(filter, update)
      res.status(200).json({message: 'User information was updated successfully'});
    } catch (err) {
      res.status(500).json({message: 'There was an error updated the user information'});
    }
  }
}

module.exports = new UserController();
