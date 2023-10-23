const bcrypt = require('bcrypt')
const User = require('../models/user')
const TokenGenerator = require('../models/token_generator');

const UsersController = {
  Create: async (req, res) => {
    const targetUser = await User.findOne({ email: req.body.email }).exec();
    if (targetUser) {
      res.status(409).json({ message: 'User already exists' });
    } else {
      const saltRounds = 10;
      bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
        if (err) {
          res.status(400).json({ message: "Password encryption error" });
        } else {
          const userData = {
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: hash,
          
          };
          if (req.body.imageUrl) {
            userData.imageUrl = req.body.imageUrl;
          }
          
          const user = new User(userData);

          try {
            await user.save();
            res.status(201).json({ message: "OK" });
          } catch (err) {
            res.status(400).json({ message: "Bad request" });
          }
        }
      });
    }
  },

  FindCurrentUser: async (req, res) => {
    try {
      const email = req.query.email;
      if (!email) {
        return res.status(400).json({ message: "Email query parameter is required." });
      }
      const currentUser = await User.findOne({ email: req.query.email }).exec();
      if (!currentUser) {
        return res.status(404).json();
      } else {
        return res.status(200).json(currentUser);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json();
    }
  }
};

module.exports = UsersController; 