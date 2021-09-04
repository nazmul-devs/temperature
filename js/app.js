// search loading 
const searchLoadin = (id, style) => {
    document.getElementById(id).style.display = style;
}

// get data form API
const getWeather = () => {
    searchLoadin('content', 'none');
    searchLoadin('loader', 'block');
    const city = document.getElementById('city-input');
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=405b86887d916f5ece71ad66adf9d2ef&units=metric`)
        .then(res => res.json())
        .then(data => showData(data));
    city.value = '';
};

// setText 
const setText = (id, text='No result found') => {
    document.getElementById(id).innerText = text;
}

// show data to UI
const showData = weather => {
    document.getElementById('icon').setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    setText('city', weather.name);
    setText('temp', weather.main.temp);
    setText('Condition', weather.weather[0].main);
    searchLoadin('content', 'block');
    searchLoadin('loader', 'none');
};