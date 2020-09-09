window.addEventListener('load', function(event) {
    var clock = document.querySelector('.clock');
    var weekday = document.querySelector('.weekday');
    var date = document.querySelector('.date');

    var greeting = document.querySelector('.greeting');
    var name = document.querySelector('.name');

    // Update the clock once per second
    setInterval(function(){
        var now = new Date();
        clock.innerHTML = formatDate(now, "hh:mmtt");
        weekday.innerHTML = formatDate(now, "dddd");
        date.innerHTML = formatDate(now, "MMMM d, yyyy");
    }, 1000);

    // If there's a name provided, greet them. Else, don't.
    if(queryStringParameters.has('name')){
        name.innerHTML = "Welcome, " + queryString('name');
    }
    else {
        greeting.parentNode.removeChild(greeting);
    }
});
