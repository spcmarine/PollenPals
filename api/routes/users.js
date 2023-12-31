const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/users');

router.post('/', UsersController.Create);
router.get('/', UsersController.FindCurrentUser)
router.post('/profile-picture', UsersController.UploadProfilePicture)

module.exports = router;

