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
})

/**
 *     <p>
        <button id="temperature-up">+</button>
        <button id="temperature-down">-</button>
        <button id="temperature-reset">reset</button>
        Powersaving mode is <span id="power-saving-status">on</span>
        <button id="powersaving-on">PSM on</button>
        <button id="powersaving-off">PSM off</button>
    </p>
    <span id="energy-usage"></span>
 */