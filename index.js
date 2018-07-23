const request = require('request');
const argv = require('yargs').argv;
console.log(argv);

let apiKey = 'a071232e809ffa4b0045dca5d99ef8de';
let city = argv.c || 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

request(url, function(err, response, body) {
  if (err) {
    console.log('error:', error);
  }else {
    let weather = JSON.parse(body);
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});
