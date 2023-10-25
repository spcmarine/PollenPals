const bcrypt = require('bcrypt');
const User = require('../models/user');
const TokenGenerator = require('../models/token_generator');

const TokensController = {

  Create: async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await User.findOne({email: email}).exec();
    if (!user) {
      res.status(401).json({message: "Email not found"});
    } else {
      bcrypt.compare(password, user.password, async (err, result) => {
        if (err) {
          res.status(401).json({message: "Password encryption error"});
        } else if (result === false) {
          res.status(402).json({message: "Incorrect Password"});
        } else {
          const token = await TokenGenerator.jsonwebtoken(user.id);
          res.status(201).json({token: token, message: "OK", username: `${user.firstName} ${user.lastName}`, userID: user._id, firstName: user.firstName, imageUrl: user.imageUrl, lastName: user.lastName});
        }
      });
    }
  }
};

module.exports = TokensController;