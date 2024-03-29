var express = require('express');
var router = express.Router();

var avatarUpload = require('../config/avatarUpload.js');
var backgroundUpload = require('../config/backgroundUpload.js');
var screenshotUpload = require('../config/screenshotUpload.js');

var uploadAvatar = require('../controller/avatar.js');
var uploadBackground = require('../controller/background.js');
var uploadScreenshot = require('../controller/screenshot.js');

router.post("/avatars", avatarUpload.single('img'), uploadAvatar);

router.post("/backgrounds", backgroundUpload.single('img'), uploadBackground);

router.post("/screenshots", screenshotUpload.single('img'), uploadScreenshot);

module.exports = router;