const request = require('postman-request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoicmVkcm94IiwiYSI6ImNrZGJ1bm1neDFhZGkycnBjZnplMHF2NWEifQ.pe_jSNxJpxyO9cFB2eDE9w&limit=1`

  request(url, { json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to location services!', null);
    } else if (response.body.features.length === 0) {
      callback('Unable to find location. Try another search.', null);
    } else {
      callback(null, {
        longitude: response.body.features[0].center[0],
        latitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name
      });
    }
  });
}

module.exports = geocode;