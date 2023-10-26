const Listing = require('../models/listing');
const TokenGenerator = require('../models/token_generator');

const ListingsController = {

    Index: async(req, res) => {
      try {
        const listings = await Listing.find().exec()
        const token = await TokenGenerator.jsonwebtoken(req.user_id)
        res.status(200).json({message: "OK", listings: listings, token: token})
      } catch (err) {
        res.status(400).json({message: "Bad request"})
      }
    },

    Create: async (req, res) => {
        const listing = new Listing(
            {
              userName: req.body.userName,
              userEmail: req.body.userEmail,
              userPlant: req.body.userPlant,
              userAvatar: req.body.userAvatar,
              requestedPlants: req.body.requestedPlants,
              userLocation: req.body.userLocation,
              userID: req.user_id,
              title: req.body.title,
              description: req.body.description,
              age: req.body.age,
              size: req.body.size,
              tip: req.body.tip,
              image: req.body.image
            })

            try { 
                await listing.save()
                const token = await TokenGenerator.jsonwebtoken(req.user_id)
                res.status(201).json({ message: "OK", token: token });
            }catch (err) {
                res.status(400).json({message: "Bad Request"});
            }
            },
    }

module.exports = ListingsController;