// Conntection to html
const elements = {
    btn: document.querySelector('.btn'),
    data: document.querySelector('.data-container'),
    loader: document.querySelector('.loader-container')
};

// State object
const state = {};

// MAIN CONTROLLER
const controller = async() => {  
    state.weather = new Data(state.lat, state.long);
    try {
        // 1. Call API 
        await state.weather.getWeather();
        // 2. Render Result
        console.log(state.weather);
       
        if (!state.weather.city) {
            throw "Could not connect please try again later";
        } else { 
            state.result = renderWeather(state.weather);
            // 3. Clear prev results if someone reloaded
            clearWeather();
            //4. Display to UI
            elements.data.insertAdjacentHTML('afterbegin', state.result); 
            elements.data.classList.add("bounce");    
        }
    } catch(error) {
        alert("Error occured please try again later");
    };    
};

// General functions for UI
function renderLoader() {
    const load = `<img class="loader" src="./img/snowflake.png" alt="">`;
    elements.loader.insertAdjacentHTML('afterbegin', load); 
};

function clearLoader() {
    elements.loader.innerHTML = "";
};

function clearWeather() {
    elements.data.innerHTML = "";
};

// UI function
function renderWeather(weather) {
    // clear loader
    clearLoader();
    const iconUrl = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;
    const markup = `  
        <div class="item"><h1>${weather.city}</h1></div>
        <div class="item"><img src=${iconUrl} alt="${weather.icon}"></div> 
        <div class="item"><h1>${weather.temp}&#8457</h1></div>
        <div class="item"><h3>${weather.summary}</h3></div>
        <div class="item"><p><i class="fas fa-wind"></i> Wind Speed: ${weather.wind}m/s</p></div>
        <div class="item"><p><img src="./img/humidity.png"> Humidity: ${weather.humidity}%</p></div>
    `;      
    return markup;
};

// Weather Class 
class Data {
    constructor(lat, long) {
        this.lat = lat;
        this.long = long;
    }
    async getWeather() {
        const key = 'f00ab5d171b8c49d2a1cb63aea898a8b';
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        try {
            const res = await fetch(`${proxy}http://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.long}&id=524901&APPID=${key}`);
            const result = await res.json();
            console.log(result);
            this.city = result.name;
            this.summary = result.weather[0].main;
            this.wind = result.wind.speed;
            this.temp = (((result.main.temp - 273.15) *1.8) + 32).toFixed(1);
            this.icon = result.weather[0].icon;  
            this.humidity = result.main.humidity;
        } catch (error) {
        alert('An error occured ):'); 
        };
    };
};
   
// Add event listener to button click        
elements.btn.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(pos => {
    state.lat = pos.coords.latitude;
    state.long = pos.coords.longitude;    
    //Add css class
    elements.btn.classList.add("btnHide");
    //Render loader
    renderLoader();
    controller();
    });  
});