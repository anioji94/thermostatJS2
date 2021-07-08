// Displays Current Temperature
document.addEventListener("DOMContentLoaded", () => {
    const thermostat = new Thermostat();
    document.querySelector('#temperature').innerText = thermostat.currentTemperature

    // Increases Current Temperature
    document.querySelector('#temperature-up').addEventListener('click', () => {
        thermostat.increaseTemperature(1);
        document.querySelector('#temperature').innerText = thermostat.currentTemperature;

    })

    // Decreases Current Temperature
    document.querySelector('#temperature-down').addEventListener('click', () => {
        thermostat.decreaseTemperature(1);
        document.querySelector('#temperature').innerText = thermostat.currentTemperature;
    })

    // Resets Current Temperature
    document.querySelector('#temperature-reset').addEventListener('click', () => {
        thermostat.resetTemperature();
        document.querySelector('#temperature').innerText = thermostat.currentTemperature
    })


})

