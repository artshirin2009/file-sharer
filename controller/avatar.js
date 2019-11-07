
const fs = require("fs");

module.exports = function(req, res, next) {
    
    res.json({
        link: `${req.get('host')}/images/${req.body.userName}/${req.file.filename}`,
    });
};
