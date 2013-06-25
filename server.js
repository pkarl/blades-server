// Blades Server

var express = require('express'),
	mongo = require('mongodb'),
	_ = require('lodash');

// Mongo

var connection = require('./connection');

// Blades Modules

var players = require('./models/players'),
	games = require('./models/games'),
	teams = require('./models/teams');

// Express

var app = express();

app.configure(function () {
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
});

app.all('/*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
});

app.get('/', function(req, res) {
	res.send('Welcome to the Blades API!');
});

app.get('/games', games.findAll);
app.get('/game/:id', games.findById);
app.post('/game', games.add);
app.put('/game/:id', games.update);
app.delete('/game/:id', games.delete);

app.get('/players', players.findAll);
app.get('/player/:id', players.findById);
app.post('/player', players.add);
app.put('/player/:id', players.update);
app.delete('/player/:id', players.delete);

app.get('/teams', teams.findAll);
app.get('/team/:id', teams.findById);
app.post('/team', teams.add);
app.put('/team/:id', teams.update);
app.delete('/team/:id', teams.delete);

app.listen(3000);
console.log('Listening on port 3000...');