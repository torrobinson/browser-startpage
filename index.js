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
        date.innerHTML = formatDate(now, "MMM d, yyyy");

        // Set greeting based on time
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

    }, 1000);

    // If there's a name provided, greet them. Else, don't.
    if(queryStringParameters.has('name')){
        name.innerHTML = queryString('name');
    }
    else {
        greeting.parentNode.removeChild(greeting);
    }




    feather.replace();
});
