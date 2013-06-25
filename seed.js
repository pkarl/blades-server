var conn = require('./connection');

exports.resetPlayers = function() {
 
	var players = [{
		name: "Jeff Vlahos",
		title: "Comissioner"
	},{
		name: "Tito Bottitta",
		title: ""
	},{
		name: "John Boilyard",
		title: "Lightning Dick"
	},{
		name: "Mike Swartz",
		title: ""
	},{
		name: "Jared Novack",
		title: ""
	},{
		name: "Pete Karl II",
		title: ""
	},{
		name: "Grant Staublin",
		title: ""
	}];

	conn.db.collection('players',function(err, collection){
		collection.remove();
	});
 
	conn.db.collection('players', function(err, collection) {
		collection.insert(players, {safe:true}, function(err, result) {});
	});
 
};

exports.resetTeams = function() {
 
	var teams = [{
		name: "New York",
		color: "#010101"
	},{
		name: "Los Angeles",
		color: "#111111"
	},{
		name: "Edmonton",
		color: "#212121"
	},{
		name: "Detroit",
		color: "#323232"
	},{
		name: "Chicago",
		color: "#454545"
	},{
		name: "New Jersey",
		color: "#666666"
	},{
		name: "Minneapolis",
		color: "#888888"
	},];
 
	conn.db.collection('teams',function(err, collection){
		collection.remove({},function(err, removed){});
	});
 
	conn.db.collection('teams', function(err, collection) {
		collection.insert(teams, {safe:true}, function(err, result) {});
	});
 
};

exports.resetGames = function() {
 
	var games = [{
		game_number: 501,
		published_date: 2013,
		player_one_id: "jvlahos",
		player_one_team_id: "losangeles",
		player_two_id: "mswartz",
		player_two_team_id: "atlanta",
		notes: "Mike struck the gaming machine with his dick.",
		scores: [{
			p1: 1,
			p2: 0
		},{
			p1: 0,
			p2: 0
		},{
			p1: 1,
			p2: 0
		},{
			p1: 0,
			p2: 1
		}],
		goals_on_self: [{
			gos_player_id: "jvlahos",
			goals: 1
		}],
		fights: [{
			fight_winner_id: "jvlahos",
			fight_loser_id: "mswartz"
		},{
			fight_winner_id: "mswartz",
			fight_loser_id: "jvlahos"
		}]
	}];
 
	conn.db.collection('games',function(err, collection){
		collection.remove({},function(err, removed){});
	});

	conn.db.collection('games', function(err, collection) {
		collection.insert(games, {safe:true}, function(err, result) {});
	});
 
};