function insertToDatabase(callback) {
	const UsersCollection = usersDb.collection('Users');

	UsersCollection.drop(function(err, delOK) {
		if (err) throw err;
		if (delOK) console.log('Users collection dropped.');
	});

	UsersCollection.insertMany([
		{
			'username': 'milos.lazarevic',
			'password': 'nobleant1',
			'avatar': 'img.jpg',
			'posts': 3,
		}, {
			'username': 'luka.savovic',
			'password': '1234',
			'avatar': 'myimage.jpg',
			'posts' : 5,
		}, {
			'username': 'lena.bjekovic',
			'password': '9876',
			'avatar': 'photo1.jpg',
			'posts' : 6,
		}, {
			'username': 'TheLegend27',
			'password': '1234',
			'avatar': 'legend.jpg',
			'posts' : 1,
		}
	], callback);
}