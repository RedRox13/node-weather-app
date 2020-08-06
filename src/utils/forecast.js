const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=5304679b7d889140df9ed28fef313dce&query=${latitude},${longitude}&units=m`;

  request(url, { json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather services!', null);
    } else if (response.body.error) {
      callback('Unable to matching results', null);
    } else {
      const data = response.body.current;
      callback(null, data);
    }
  });
}

module.exports = forecast;