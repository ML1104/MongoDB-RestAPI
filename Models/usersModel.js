let usersCollection = {};
const database = require('../usersDb').then(function(db) {
	usersCollection = db.collection('Users');
});

exports.getUsers = function (arg, callback) {
	usersCollection.find(arg).toArray(callback);
}

exports.getUser = function (arg, callback) {
	usersCollection.findOne(arg, callback);
}

exports.insertUser = function (user, callback) {
	usersCollection.insertOne(user, callback);
}

exports.deleteUser = function (query, callback) {
	usersCollection.deleteOne(query, callback);
}