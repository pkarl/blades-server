var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;
 
var server = new Server('localhost', 27017, {auto_reconnect: true});
exports.db = new Db('blades', server);

exports.db.open(function(err, db) {
    if(!err) {
        console.log("Connected to blades database");
    } else {
        console.log("ERR: Cannot connect to blades database", err);
    }
});