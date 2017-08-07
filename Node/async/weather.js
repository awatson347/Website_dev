var request = require('request');

module.exports = function (location, callback) {
	var encodedLocation = encodeURIComponent(location);
	var url = 'http://api.openweathermap.org/data/2.5/weather?appid=d5d97de33ba51abfc4f3dd6a69b92d7e&q=' + encodedLocation + '&units=imperial';

	if (!location) {
		return callback('No location provided');
	}

	request({
		url: url,
		json: true
	}, function (error, response, body) {
		if (error) {
			callback('Unable to fetch weather.');
		} else {
			callback('Its ' + body.main.temp + ' in ' + body.name + '!');
		}
	});
}