class Thermostat {
    constructor() {
        this.currentTemperature = 20
        this.minimumTemperature = 10
        this.powersavingMode = true
    }

    #minmaxTemperatureError(value) {
        if( this.currentTemperature < 10 ){
            this.currentTemperature += value;
            throw 'Minimum temperature is 10 Degrees!';
        }
    }

    #changeTemperature(value) {
        this.currentTemperature += value;
        this.#minmaxTemperatureError();
    }

    increaseTemperature(value) {
        this.#changeTemperature(value);
    }

    decreaseTemperature(value) {
        this.#changeTemperature(value *= -1);
    }
}

module.exports = Thermostat;