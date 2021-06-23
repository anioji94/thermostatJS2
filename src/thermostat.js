class Thermostat {
    constructor() {
        this.currentTemperature = 20
        this.minimumTemperature = 10
    }

    #minimumTemperatureError(value) {
        if( this.currentTemperature < 10 ){
            this.currentTemperature += value;
            throw 'Minimum temperature is 10 Degrees';
        }
    }

    #changeTemperature(value) {
        this.currentTemperature += value;
        this.#minimumTemperatureError();
    }

    increaseTemperature(value) {
        this.#changeTemperature(value);
    }

    decreaseTemperature(value) {
        this.#changeTemperature(value *= -1);
    }
}

module.exports = Thermostat;