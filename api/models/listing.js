const mongoose = require('mongoose')

const ListingSchema = new mongoose.Schema({
    userID: {type: String, required: true},
    userName: {type: String, required: true},
    userEmail: {type: String, required: true},
    userPlant: {type: String},
    requestedPlant: {type: String},
    userLocation: {type: String, required: true},
    plantPrice: {type: Number}
    });
    

  
  const Listing = mongoose.model("Listing", ListingSchema);
  
  module.exports = Listing;