var fs = require('fs');

var RequestLogger = function (req, res, next) {

    var logMessage = "" + new Date() + " " + req.method + " " + req.url + "\n"; 
    fs.appendFile('RequestLogger.txt', logMessage , function (err) {
        if (err) return next(err);
    });
    next();

}

module.exports = RequestLogger;