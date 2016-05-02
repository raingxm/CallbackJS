module.exports = {
  getTemperatureByLocation: function(place, cb) {
    "use strict";

    var temp, err;

    switch (place) {
      case "San Francisco,CA":
        temp = 56.59;
        break;
      case "New York,NY":
        temp = 44.76;
        break;
      case "Seattle,WA":
        temp = 48.92;
        break;
      default:
         err = "Unknown place";
    }

    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if (typeof cb === 'function') {
          cb(err, temp);
        } else {
          temp !== undefined ? resolve(temp) : reject(err);
        }
      }, 1000);
    });
  }
};