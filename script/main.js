const $searchForm = document.querySelector("#search-form");
const $searchInput = document.querySelector("#search-input")
const $weatherImg = document.querySelector("#weather-img");
const $weatherIndicator = document.querySelector("#weather-indicator")
const $weatherLocation = document.querySelector("#weather-location")

// API KEY
const API_KEY = "644f6ce0ca9e401ebb891832211707";


const renderData = (data) => {
    $weatherImg.src = "https:" + data.current.condition.icon;
    $weatherIndicator.innerText = data.current.temp_c + "°";
    $weatherLocation.innerText = `${data.location.name}, ${data.location.country}`;
}

const loadData = (city) =>{
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=yes&alerts=yes`)
        .then((response) => response.json())
        .then(data => renderData(data))
}

loadData("Tashkent")

const searchCityWeather = (e) => {
    e.preventDefault()
    loadData($searchInput.value)

        $searchInput.value = ""
}

// eventlisteners
$searchForm.addEventListener("submit" , searchCityWeather )