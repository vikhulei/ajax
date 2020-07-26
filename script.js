//creating variables for 5 days ahead

var d1 = new Date();
d1.setDate(d1.getDate()); 
var dd = d1.getDate();
var mm = d1.getMonth() + 1;
var y = d1.getFullYear();
var dd1 = dd + '/'+ mm + '/'+ y;

var d2 = new Date();
d2.setDate(d2.getDate() + 1); 
var dd = d2.getDate();
var mm = d2.getMonth() + 1;
var y = d2.getFullYear();
var dd2 = dd + '/'+ mm + '/'+ y;

var d3 = new Date();
d3.setDate(d3.getDate() + 2); 
var dd = d3.getDate();
var mm = d3.getMonth() + 1;
var y = d3.getFullYear();
var dd3 = dd + '/'+ mm + '/'+ y;

var d4 = new Date();
d4.setDate(d4.getDate() + 3); 
var dd = d4.getDate();
var mm = d4.getMonth() + 1;
var y = d4.getFullYear();
var dd4 = dd + '/'+ mm + '/'+ y;

var d5 = new Date();
d5.setDate(d5.getDate() + 4); 
var dd = d5.getDate();
var mm = d5.getMonth() + 1;
var y = d5.getFullYear();
var dd5 = dd + '/'+ mm + '/'+ y;

//passing dates for 5 days ahead to the document elements

document.querySelector('#weather #bb1').innerHTML = dd1;
document.querySelector('#weather #bb2').innerHTML = dd2;
document.querySelector('#weather #bb3').innerHTML = dd3;
document.querySelector('#weather #bb4').innerHTML = dd4;
document.querySelector('#weather #bb5').innerHTML = dd5;



btn.addEventListener('click', function(e){

//getting information from the remote site

var prefix = 'https://cors-anywhere.herokuapp.com/';
var cit = city.value;

fetch(prefix + 'https://www.metaweather.com/api/location/search/?query=' + cit)
.then(function(response) {
    return response.json();
})

.then(function(json) {
    return fetch(prefix + 'https://www.metaweather.com/api/location/' + json[0].woeid + '/');
})

.then(function(response) {
    return response.json();
})

.then(function(json) {

//getting weather for each of the 5 days
//and passing them to the document elements

var temp1 = json.consolidated_weather[0].the_temp;
document.querySelector('#weather #b1').innerHTML = temp1.toFixed();
document.querySelector('#weather #im1').src = 'https://www.metaweather.com/static/img/weather/png/64/' + json.consolidated_weather[0].weather_state_abbr +'.png';


var temp2 = json.consolidated_weather[1].the_temp;
document.querySelector('#weather #b2').innerHTML = temp2.toFixed();
document.querySelector('#weather #im2').src = 'https://www.metaweather.com/static/img/weather/png/64/' + json.consolidated_weather[1].weather_state_abbr +'.png';


var temp3 = json.consolidated_weather[2].the_temp;
document.querySelector('#weather #b3').innerHTML = temp3.toFixed();
document.querySelector('#weather #im3').src = 'https://www.metaweather.com/static/img/weather/png/64/' + json.consolidated_weather[2].weather_state_abbr +'.png';


var temp4 = json.consolidated_weather[3].the_temp;
document.querySelector('#weather #b4').innerHTML = temp4.toFixed();
document.querySelector('#weather #im4').src = 'https://www.metaweather.com/static/img/weather/png/64/' + json.consolidated_weather[3].weather_state_abbr +'.png';

var temp5 = json.consolidated_weather[4].the_temp;
document.querySelector('#weather #b5').innerHTML = temp5.toFixed();
document.querySelector('#weather #im5').src = 'https://www.metaweather.com/static/img/weather/png/64/' + json.consolidated_weather[4].weather_state_abbr +'.png';

}) .catch(function() {
    alert('If it does not show the results, please try to relode the page');
})

e.preventDefault();
}, false)