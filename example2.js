var weather = require('./weather');

weather.getTemperatureByLocation('San Francisco, CA', function(err, temperature) {
	if(err) {
		console.log(err);
	}
	else {
		console.log(temperature);
	}
});

var temperature = weather.getTemperatureByLocation('San Francisco CA');