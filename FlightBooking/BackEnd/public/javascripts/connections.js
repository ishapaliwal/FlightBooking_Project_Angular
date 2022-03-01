var MongoClient = require('mongodb');
var url = "mongodb://localhost:27017/EXAM_DB";

var connection={};

connection.getConnection = function(){
    return MongoClient.connect(url).then(function(database){
        return database.db();
    }).catch(function (error) {
        throw new Error("Could not connect to Database");
    })
}
module.exports=connection;