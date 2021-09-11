const express = require('express');
const router = express.Router();
const mainController = require('../controller/mainController')
const uploadController = require('../controller/uploadController')

router.get('/', mainController.index);
router.post('/upload', uploadController.upload);

module.exports = router