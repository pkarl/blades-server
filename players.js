// ============================================================
//							PLAYERS
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
        db.collection('players', {strict:true}, function(err, collection) {
            seed.resetPlayers();
            if (err) {
                console.log("The 'players' collection doesn't exist.");
            }
        });
    }
});


exports.findAll = function(req, res) {
	utils.findAll(db, 'players', res);
};
 
exports.findById = function(req, res) {
    utils.findById(db, 'players', res, req.params.id);
};

exports.add = function(req, res) {
    utils.add(db, 'players', res, req.body);
};
 
exports.update = function(req, res) {
    utils.update(db, 'players', res, req.params.id, req.body);
};

exports.delete = function(req, res) {
    utils.delete(db, 'players', res, req.params.id, req);
};