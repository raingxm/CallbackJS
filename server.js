var express = require('express'),
  co = require('co'),
  weather = require('./weather'),
  population = require('./population'),
  loaction = require('location');

var app = express();

app.get('/:zipcode', function (req, res) {
  var zipcode, city, state, temperature, pepole, info;
  zipcode = req.params.zipcode;

  co(function *() {
    try {
      var results = yield {
        foundLocation: location.findLocationByZipcode(zipcode),
        foundPopulation: population.findPopulationByZipcode(zipcode)
      };

      if (results && results.foundLocation && results.foundPopulation) {
        var foundTemperature = yield weather.getTemperatureByLatLong(results.foundLocation.latitude,
          results.foundLocation.longtitude);
        city = resuls.foundLocation.city;
        state = results.foundLocation.state;
        temperature = foundTemperature;
        people = results.foundPopulation;

        info = 'Location: ' + city + ', ' + state;
        info += ', Temperature: ' + temperature;
        info += ', Population: ' + pepole;
        res.send(info);
      }
      else {
        res.status(500).send('Ouch, we had a problem.');
      }

    } catch (err) {
      res.status(500).send('Ouch, we had a problem.');
    }
  })();
});

app.listen(3000);