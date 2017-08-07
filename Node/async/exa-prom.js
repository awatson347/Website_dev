var request = require('request');

function getWeather(location) {
	return new Promise(function (resolve, reject) {
		var encodedLocation = encodeURIComponent(location);
		var url = 'http://api.openweathermap.org/data/2.5/weather?appid=d5d97de33ba51abfc4f3dd6a69b92d7e&q=' + encodedLocation + '&units=imperial';
		
		if(!location) {
			return reject('No Location provided');
		}
		request({
			url: url,
			json:true
		} , function (error, response, body){
			if(error) {
				reject('Unable to fetch weather.');
			} else {
				resolve('It\'s '  + body.main.temp +' In '  +  body.name + '!');
			}
		});
	});
}
getWeather('alaska').then(function (currentWeather) {
	console.log(currentWeather);
}, function(error) {
	console.log(error);
});