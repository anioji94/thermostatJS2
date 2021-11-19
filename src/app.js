// Displays Current Temperature
document.addEventListener("DOMContentLoaded", () => {
    const thermostat = new Thermostat
    function updateTemp() {
        document.querySelector('#temperature').innerText = thermostat.currentTemperature
        document.querySelector('#temperature').className = thermostat.energyReport()
    }

    updateTemp()

    // Increase Temp
    document.querySelector('#temperature-up').addEventListener('click', () => {
        thermostat.increaseTemperature()
        updateTemp()
    })

    // Decrease Temp
    document.querySelector('#temperature-down').addEventListener('click', () => {
        thermostat.decreaseTemperature()
        updateTemp()
    })

    // Reset Temp
    document.querySelector('#temperature-reset').addEventListener('click', () => {
        thermostat.resetTemperature()
        updateTemp()
    })

    // Powersaving Mode On
    document.querySelector('#powersaving-on').addEventListener('click', () => {
        thermostat.onSwitchPowersaving()
        document.querySelector('#power-saving-status').innerText = 'on'
    })

    // Powersaving Mode Off
    document.querySelector('#powersaving-off').addEventListener('click', () => {
        thermostat.offSwitchPowersaving()
        document.querySelector('#power-saving-status').innerText = 'off'
    })

    // API Calls
    
    const displayWeather = (city) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3778fc05401d0fdfe10f9f06a9e65c02&units=metric`
        fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            document.querySelector('#weather')
            .innerHTML = `<div id="city-temp">
            <div id="text-city-temp">
                <h3>${data.name}</h3>\n<p>Temperature: ${data.main.temp}&#176;C</p>
            </div>
            </div>`
        })
    }
    
    document.querySelector('#select-city').addEventListener('submit', (event) => {
        event.preventDefault()
        const city = document.querySelector('#current-city').value
        displayWeather(city)
    })

})