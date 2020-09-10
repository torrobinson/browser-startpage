window.addEventListener('load', function(event) {
    // Update the clock once per second
    updateClock();
    setInterval(updateClock, 1000);


    // If there's a name provided, greet them. Else, don't.
    var name = document.querySelector('.name');
    if(queryStringParameters.has('name')){
        name.innerHTML = queryString('name');
    }
    else {
        greeting.parentNode.removeChild(greeting);
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
    greeting.innerHTML = greetingMessage;
}

function updateWeather() {
    var location = 'Edmonton, Alberta';
    var weatherApiKey = 'c315bd9f957bdf78a0769079e04bdd39';
    var api = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${weatherApiKey}`;
    fetch(api)
    .then(function (response) {
            let data = response.json();
            return data;
        })
        .then(function (data) {
            var celcius = Math.floor(data.main.temp - 273.15);
            var description = data.weather[0].description;
            var icon = data.weather[0].icon;

            var celciusElement = document.querySelector('.celcius');
            var descriptionElement = document.querySelector('.weather-description');
            var iconElement = document.querySelector('.weather-icon');

            celciusElement.innerHTML =  celcius;
            descriptionElement.innerHTML =  description;
        });
}
