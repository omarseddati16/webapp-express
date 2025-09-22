const express = require('express');
const router = express.Router();

const controller = require('../controller/controller')
const reviewsController = require('../controller/reviewsController')

router.get('/', controller.index);

router.get('/:id', controller.show);

module.exports = router;
