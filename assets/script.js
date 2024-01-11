var APIKey = 'cdd244a4763dfc0a4144abb4681ce654'
var citySearch = document.getElementById('citySearch')
var cityFind = document.getElementById('cityFind')

var day1Date = document.getElementById('day1Date')
var day1Temp = document.getElementById('day1Temp')
var day1Wind = document.getElementById('day1Wind')
var day1Hum = document.getElementById('day1Hum')

var day2Date = document.getElementById('day2Date')
var day2Temp = document.getElementById('day2Temp')
var day2Wind = document.getElementById('day2Wind')
var day2Hum = document.getElementById('day2Hum')

var day3Date = document.getElementById('day3Date')
var day3Temp = document.getElementById('day3Temp')
var day3Wind = document.getElementById('day3Wind')
var day3Hum = document.getElementById('day3Hum')

var day4Date = document.getElementById('day4Date')
var day4Temp = document.getElementById('day4Temp')
var day4Wind = document.getElementById('day4Wind')
var day4Hum = document.getElementById('day4Hum')

var day5Date = document.getElementById('day5Date')
var day5Temp = document.getElementById('day5Temp')
var day5Wind = document.getElementById('day5Wind')
var day5Hum = document.getElementById('day5Hum')

var day6Date = document.getElementById('day6Date')
var day6Temp = document.getElementById('day6Temp')
var day6Wind = document.getElementById('day6Wind')
var day6Hum = document.getElementById('day6Hum')

var searchInputVal; 


function handleSearchFormSubmit(event) {
    event.preventDefault();
    
    searchInputVal = cityFind.value.trim();
    console.log(searchInputVal);
    if (!searchInputVal) {
        console.error('You need a search input value!');
        return;
    }
    
    callWeather();
}

function callWeather() {
    var locQueryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInputVal}&appid=${APIKey}&units=imperial`
    
    fetch(locQueryUrl)
    
    .then(function (response) {
        if (!response.ok) {
            throw response.json();
        }
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        var cityFindLong = data.coord.lon
        var cityFindLat = data.coord.lat
        var cityCoords = `https://api.openweathermap.org/data/2.5/forecast?lat=${cityFindLat}&lon=${cityFindLong}&appid=${APIKey}`

        fetch(cityCoords) 
       
       .then (function(response2) {
            if (!response2.ok)  {
                throw response2.json();
             }
             return response2.json();
        })
        .then(function (data2) {
            console.log(data2);

            // data.list(0).
        })
    })
    
}


  
citySearch.addEventListener('submit',handleSearchFormSubmit);