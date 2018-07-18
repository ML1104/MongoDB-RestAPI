const Model = require('../Models/usersModel');

exports.Index = function (request, response) {
	Model.getUsers({}, function(err, results) {
		if (err) throw err;

		responseResults = [];
		results.forEach((user, key) => {
			responseResults.push({
				id: user._id,
				username: user.username,
				avatar: user.avatar
			});
		});

		response.send(responseResults);
	});
}

exports.Insert = function (request, response) {

	let newUser = {
		username: request.body.username,
		password: request.body.password,
		avatar: request.body.avatar,
	};

	if (!newUser.username || !newUser.username.length) {
		response.status(400).send({
			'status': 400,
			'message': 'A new user must provide a username!'
		});
		return;
	}

	if (!newUser.password || !newUser.password.length) {
		response.status(400).send({
			'status': 400,
			'message': 'A new user must provide a password!'
		});
		return;
	}

	Repository.insertUser(newUser, function(err, results) {

		Repository.getUser(
			{'username': newUser.username},
			function(err, results) {
				response.send(results);
			});
	});
}