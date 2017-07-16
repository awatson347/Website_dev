var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?appid=d5d97de33ba51abfc4f3dd6a69b92d7e&q=florida + &units=imperial';

request ({
	url: url,
	json: true
}, function (error, response, body) {
	if (error) {
		console.log('Unable to fetch weather.');
	} else {
		//console.log(JSON.stringify(body, null, 4));
		console.log("The temp in Orlando:" + body.main.temp +" "+ body.name );
	}
});




