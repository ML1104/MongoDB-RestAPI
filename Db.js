const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'RESTFULMVC';
let db;

module.exports = new Promise(function(resolve, reject) {
	MongoClient.connect(url, function(err, client) {
		if (err) throw err;
		console.log('Connected to database');
		db = client.db(dbName);

		resolve(db);
	});
});