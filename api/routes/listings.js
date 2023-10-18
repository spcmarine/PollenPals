const express = require('express');
const router = express.Router();
const ListingsController = require('../controllers/listings');

router.get('/', ListingsController.Index);
router.post('/', ListingsController.Create);



module.exports = router;