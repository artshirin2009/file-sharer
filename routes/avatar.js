var express = require('express');
var router = express.Router();
var multerUpload = require('../config/file-upload.js')
var uploadUserData = require('../controller/avatar.js');

router.post("/avatars", multerUpload.single('img'), uploadUserData);

module.exports = router;