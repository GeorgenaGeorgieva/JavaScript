async function attachEvents() {
    let nameLocation = document.getElementById('location');
    let getWeatherBtn = document.getElementById('submit');
    let forecast = document.getElementById('forecast');
    let currentWeather = document.getElementById('current');

    // forecast.style.display = 'none';

    getWeatherBtn.addEventListener('click', () => {
        fetch(`https://judgetests.firebaseio.com/locations.json`)
            .then(d => d.json())
            .then(d => filterName(d))
            .then(d => makeCodeGetRequests(d))
            .then(d => console.log(d))
            .catch(() => { forecast.innerHTML = 'Error' });

        forecast.style = 'block';
    })

    function filterName(data) {
        return Object.values(data).filter(x => x.name.toLowerCase() === nameLocation.value.toLowerCase());
    }

    function makeCodeGetRequests(data) {
        let [{ code }] = data;

        fetch(`https://judgetests.firebaseio.com/forecast/today/${code}.json`)
            .then(x => x.json())
            .then(x => insertTodayWeather(x))
            .then(console.error());
    }

    function insertTodayWeather(data) {

        let divForecastClass = document.createElement('div');
        divForecastClass.setAttribute('class', 'forecast');
        let span = document.createElement('span');
        span.setAttribute('class', 'condition symbol');

        const weatherMap = {
            'Sunny': '☀',
            'Partly sunny': '⛅',
            'Overcast': '☁',
            'Rain': '☔',
        };

        divForecastClass.appendChild(span);
        return currentWeather.appendChild(divForecastClass);
    }
}

attachEvents();