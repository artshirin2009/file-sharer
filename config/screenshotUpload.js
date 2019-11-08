var multer = require('multer');
var mkdirp = require('mkdirp');
const fs = require('fs');

let folderToSave;
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        folderToSave = `${process.env.SCREENSHOT_STORE}${req.body.funnelsId}`;
        mkdirp.sync(folderToSave);
        callback(null, folderToSave);
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + file.originalname.toString().slice(-4));
    }
});


module.exports = multer({
    storage: storage
}); 