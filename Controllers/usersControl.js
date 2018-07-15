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