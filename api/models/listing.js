const mongoose = require('mongoose')
const { ObjectID } = require('mongodb')

const ListingSchema = new mongoose.Schema({
    userID: {type: mongoose.Schema.Types.ObjectId, ref: "Users"},
    userName: {type: String, required: true},
    userEmail: {type: String, required: true},
    userPlant: {type: String, default: "None"},
    userAvatar: {type: String},
    requestedPlants: {type: [String], default: ["None"]},
    userLocation: {type: String, required: true},
    isAvailable: {type: Boolean, default: true},
    title: {type: String, require: true},
    description: {type: String, required: true},
    age: {type: String, required: true},
    size: {type: String, required: true},
    tip: {type: String},
    createdAt: {type: Date, default: Date.now}
    });
    

  
  const Listing = mongoose.model("Listing", ListingSchema);
  
  module.exports = Listing;