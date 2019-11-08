var multer = require('multer');
var mkdirp = require('mkdirp');
const fs = require('fs');

let folderToSave;
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        folderToSave = `${process.env.BACKGROUND_STORE}${req.body.funnelId}`
        mkdirp.sync(folderToSave);
        callback(null, folderToSave);
    },
    filename: function (req, file, callback) {

        fs.readdir(folderToSave, (err, files) => {
            console.log(folderToSave)
            if(files.length>0){
                callback(null, files[0]);
            }
            else{
                callback(null, Date.now() + file.originalname.toString().slice(-4));
            }
          });
    }
});


module.exports = multer({ storage: storage });  