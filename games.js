// ============================================================
//							GAMES
// ============================================================

var mongo = require('mongodb'),
	utils = require('./dbutils'),
    seed = require('./seed');
 
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;
 
var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('blades', server);

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to blades database");
        db.collection('games', {strict:true}, function(err, collection) {
            seed.resetGames();
            if (err) {
                console.log("The 'blades' collection doesn't exist. Creating it with sample data...");
            }
        });
    }
});


exports.findAll = function(req, res) {
	utils.findAll(db, 'games', res);
};
 
exports.findById = function(req, res) {
    utils.findById(db, 'games', res, req.params.id);
};

exports.add = function(req, res) {
    utils.add(db, 'games', res, req.body);
};
 
exports.update = function(req, res) {
    utils.update(db, 'games', res, req.params.id, req.body);
};

exports.delete = function(req, res) {
    utils.delete(db, 'games', res, req.params.id, req);
};