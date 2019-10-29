var multer = require('multer');
var mkdirp = require('mkdirp');
    
var storage = multer.diskStorage({
    
    destination: function (req, file, callback) {
        let folderToSave = `./public/images/${req.body.userName}`
        mkdirp.sync(folderToSave);
        callback(null, folderToSave);
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + file.originalname.toString().slice(-4));
    }
});


module.exports = multer({ storage: storage });  