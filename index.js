var currentLocation = 'New York City';
var lat = 40.7128;
var long = -74.0060;

var weatherApiKey = '';
// Set the weather api key
if(queryStringParameters.has('weatherApiKey')){
    weatherApiKey = queryString('weatherApiKey');
}

if(queryStringParameters.has('lat')){
    lat = queryString('lat');
}
if(queryStringParameters.has('long')){
    long = queryString('long');
}

window.addEventListener('load', function(event) {
    // Update the clock once per second
    updateClock();
    setInterval(updateClock, 1000);

    // Default the location
    var locationElement = document.querySelector('.location');
    if(queryStringParameters.has('location')){
        currentLocation = queryString('location');
    }
    locationElement.innerHTML = currentLocation;

    // If there's a name provided, greet them. Else, don't.
    var name = document.querySelector('.name');
    if(queryStringParameters.has('name')){
        name.innerHTML = queryString('name');
    }
    else {
        var greeting = document.querySelector('.greeting');
        if(greeting){
            var name = document.querySelector('.name');
            greeting.parentNode.removeChild(greeting);
            name.parentNode.removeChild(name);
        }
    }

    // Update weather every 5 minutes
    updateWeather();
    setInterval(updateWeather, 300000);


    feather.replace();
});

function updateClock(){
    var clock = document.querySelector('.clock');
    var weekday = document.querySelector('.weekday');
    var date = document.querySelector('.date');

    var now = new Date();
    clock.innerHTML = formatDate(now, "hh:mmtt");
    weekday.innerHTML = formatDate(now, "dddd");
    date.innerHTML = formatDate(now, "MMM d, yyyy");

    // Set greeting based on time
    var greeting = document.querySelector('.greeting');
    if(greeting){
        var hours = now.getHours();
        var greetingMessage = 'Welcome';
        if(hours >=6 && hours < 12)
            greetingMessage = "Good Morning"
        else if(hours >=12 && hours <16)
            greetingMessage = "Good Afternoon"
        else if(hours >=16 && hours <20)
            greetingMessage = "Good Evening"
        else if(hours >=20 || hours < 6)
            greetingMessage = "Good Night"
        greeting.innerHTML = greetingMessage + ', ';
    }
}

function updateWeather() {
    if(weatherApiKey == '') return;
    var api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${weatherApiKey}`;
    fetch(api)
    .then(function (response) {
            let data = response.json();
            return data;
        })
        .then(function (data) {
            const kelvin = 273.15;
            var celcius = Math.floor(data.current.temp - kelvin);
            var min = Math.floor(data.daily[0].temp.min - kelvin);
            var max = Math.floor(data.daily[0].temp.max - kelvin);
            var description = data.current.weather[0].description;
            description = description[0].toUpperCase() + description.substring(1);
            var icon = data.current.weather[0].icon;

            var celciusElement = document.querySelector('.celcius');
            var minElement = document.querySelector('.temp-min');
            var maxElement = document.querySelector('.temp-max');
            var descriptionElement = document.querySelector('.weather-description');
            var iconHolderElement = document.querySelector('.weather-icon');

            // Temp
            celciusElement.innerHTML =  celcius;
            minElement.innerHTML = min + '°';
            maxElement.innerHTML = max + '°';

            // Description
            descriptionElement.innerHTML =  description;

            // Icon
            var actualIcon = '';
            switch(icon.substring(0,2)){
                case '01':
                    actualIcon = 'sun';
                    break;
                case '02':
                case '03':
                case '04':
                    actualIcon = 'cloud';
                    break;
                case '09':
                case '10':
                    actualIcon = 'cloud-rain';
                    break;
                case '11':
                    actualIcon = 'cloud-lightning';
                    break;
                case '13':
                    actualIcon = 'cloud-snow';
                    break;
                case '50':
                    actualIcon = 'wind';
                    break;
                default:
                    actualIcon = 'cloud';
            }
            iconHolderElement.innerHTML = `<i data-feather="${actualIcon}"></i>`;
            feather.replace();
        });
}
