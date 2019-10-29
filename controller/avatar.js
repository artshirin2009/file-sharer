var jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    let userAccount = req.body.userName
    
    jwt.sign({
        userAccount
    }, 'secretkey', {
        expiresIn: '24h'
    }, (err, token) => {
        if (err){
            
            console.log(err)
        }
        else {
            res.json({
            message: "File uploaded successfully!", 
            // fileName: req.files[0].filename,
            // folderToSave: req.files[0].destination,
            link: `${req.get('host')}/images/${req.body.userName}/${req.file.filename}`,
            token: token
        });
        }
        
    });
};
