// ============================================================
//							TEAMS
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
        db.collection('teams', {strict:true}, function(err, collection) {
            seed.resetTeams();
            if (err) {
                console.log("The 'teams' collection doesn't exist.");
            }
        });
    }
});


exports.findAll = function(req, res) {
	utils.findAll(db, 'teams', res);
};
 
exports.findById = function(req, res) {
    utils.findById(db, 'teams', res, req.params.id);
};

exports.add = function(req, res) {
    utils.add(db, 'teams', res, req.body);
};
 
exports.update = function(req, res) {
    utils.update(db, 'teams', res, req.params.id, req.body);
};

exports.delete = function(req, res) {
    utils.delete(db, 'teams', res, req.params.id, req);
};