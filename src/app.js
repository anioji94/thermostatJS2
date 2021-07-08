document.addEventListener("DOMContentLoaded", () => {
    const thermostat = new Thermostat();
    document.querySelector('#temperature').innerText = thermostat.currentTemperature
})