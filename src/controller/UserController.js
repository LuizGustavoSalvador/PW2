const User = require('../model/User');

module.exports = {
  async index(req, res){
    const users = await User.find();
    res.json(users);
  }
};