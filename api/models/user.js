const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  email: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  password: {type: String, required: true},
  imageUrl: { type: String, default: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?auto=format&fit=crop&w=500&q=60' }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;