var express = require('express');
var router = express.Router();
var multerUpload = require('../config/file-upload')
var uploadUserData = require('../controller/avatar');

router.post("/avatars", multerUpload.single('img'), uploadUserData);

module.exports = router;