class Thermostat {
    constructor() {
        this.currentTemperature = 20
        this.psOnMaxTemperature = 25
        this.posOffMaxTemperature = 32
        this.minimumTemperature = 10
        this.powersavingMode = true
    }

    #lowTempError(value) {
        this.currentTemperature += value;
        throw 'Minimum temperature is 10 Degrees!';
    } 

    #psOnHighTempError(value) {
        this.currentTemperature -= value;
        throw 'Powersaving Mode is On. Max temp is 25 Degrees';
    }

    #psOffHighTempError(value) {
        this.currentTemperature -= value;
        throw 'Powersaving Mode is Off. Max temp is 32 Degrees'
    }

    #minmaxTemperatureError(value) {
        if( this.currentTemperature < 10 ){
            this.#lowTempError(value)
        } else if( this.powersavingMode === true && this.currentTemperature > this.psOnMaxTemperature ) {
            this.#psOnHighTempError(value)
        } else if ( this.powersavingMode === false && this.currentTemperature > this.posOffMaxTemperature ) {
            this.#psOffHighTempError(value)
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