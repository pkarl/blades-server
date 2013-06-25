// ============================================================
//							GAMES
// ============================================================

var mongo = require('mongodb'),
	utils = require('../dbutils'),
    seed = require('../seed');

var conn = require('../connection');

exports.findAll = function(req, res) {
	utils.findAll(conn.db, 'games', res);
};
 
exports.findById = function(req, res) {
    utils.findById(conn.db, 'games', res, req.params.id);
};

exports.add = function(req, res) {
    utils.add(conn.db, 'games', res, req.body);
};
 
exports.update = function(req, res) {
    utils.update(conn.db, 'games', res, req.params.id, req.body);
};

exports.delete = function(req, res) {
    utils.delete(conn.db, 'games', res, req.params.id, req);
};