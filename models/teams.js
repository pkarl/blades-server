// ============================================================
//							TEAMS
// ============================================================

var mongo = require('mongodb'),
	utils = require('../dbutils'),
    seed = require('../seed');

var conn = require('../connection');

exports.findAll = function(req, res) {
	utils.findAll(conn.db, 'teams', res);
};
 
exports.findById = function(req, res) {
    utils.findById(conn.db, 'teams', res, req.params.id);
};

exports.add = function(req, res) {
    utils.add(conn.db, 'teams', res, req.body);
};
 
exports.update = function(req, res) {
    utils.update(conn.db, 'teams', res, req.params.id, req.body);
};

exports.delete = function(req, res) {
    utils.delete(conn.db, 'teams', res, req.params.id, req);
};