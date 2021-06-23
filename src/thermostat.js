class Thermostat {
    constructor() {
        this.currentTemperature = 20
    }

    #changeTemperature(value) {
        this.currentTemperature += value
    }

    increaseTemperature(value) {
        this.#changeTemperature(value)
    }

    decreaseTemperature(value) {
        this.#changeTemperature(value *= -1)
    }
}

module.exports = Thermostat;