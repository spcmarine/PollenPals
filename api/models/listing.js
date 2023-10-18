const mongoose = require('mongoose')
const { ObjectID } = require('mongodb')

const ListingSchema = new mongoose.Schema({
    userID: {type: mongoose.Schema.Types.ObjectId, ref: "Users"},
    userName: {type: String, required: true},
    userEmail: {type: String, required: true},
    userPlant: {type: String, default: "None"},
    requestedPlants: {type: [String], default: ["None"]},
    userLocation: {type: String, required: true},
    isAvailable: {type: Boolean, default: true}
    });
    

  
  const Listing = mongoose.model("Listing", ListingSchema);
  
  module.exports = Listing;