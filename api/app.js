const express = require('express')
const app = express()
const port = 8080
const JWT = require('jsonwebtoken')
const logger = require('morgan')
const path = require('path')
const mongoose = require('mongoose')
require('dotenv').config()

const usersRouter = require('./routes/users');
const listingsRouter = require('./routes/listings');
const tokensRouter = require('./routes/tokens');

app.use(express.json())

app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const tokenChecker = (req, res, next) => {

  let token;
  const authHeader = req.get("Authorization")
  console.log("authH:", authHeader);

  if(authHeader) {
    token = authHeader.slice(7)
  }

  JWT.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if(err) {
      res.status(401).json({message: "auth error"});
    } else {
      req.user_id = payload.user_id;
      next();
    }
  });
};

var mongoDbUrl = process.env.MONGODB_URL || "mongodb://0.0.0.0/pollenPals";
  mongoose.connect(mongoDbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use('/users', usersRouter);
app.use('/listings', tokenChecker, listingsRouter);
app.use('/tokens', tokenChecker, tokensRouter);

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = server;