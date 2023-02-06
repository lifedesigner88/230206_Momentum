
function onGeoOk(onGeoOk){

    const API_KEY = "a0d1371ccf175c2947d36ea3067ec6ff" 
    const lat = onGeoOk.coords.latitude;
    const lon = onGeoOk.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data =>{

        const cityContainer = document.querySelector("#weather span:first-child");
        const weatherContainer = document.querySelector("#weather span:last-child");

        cityContainer.innerText = data.name ;
        weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    
    });

}

function onGeoError(){

    alert("Can't find You. No weather for you.")

}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
