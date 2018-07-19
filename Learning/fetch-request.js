fetch('password.txt', {
	'method': 'PUT',
	'headers': {
		'X-Udacity-Exercise': 'fetch is awesome!'
	}
}).then(function( response) {
	return response.text();
	}) .then(function ( data ) {
		console.log( data );
		});