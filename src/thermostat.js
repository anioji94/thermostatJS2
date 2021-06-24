class Thermostat {
    constructor() {
        this.defaultTemperature = 20
        this.currentTemperature = this.defaultTemperature
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

    offSwitchPowersaving() {
        this.powersavingMode = false
    }

    onSwitchPowersaving() {
        this.powersavingMode = true
    }

    resetTemperature() {
        this.currentTemperature = this.defaultTemperature
    }

    energyReport() {
        if( this.currentTemperature < 18 ) {
            return 'Low Usage'
        } else if( this.currentTemperature > 18 && this.currentTemperature <= 25 ) {
            return 'Medium Usage'
        } else if( this.currentTemperature > 25 ) {
            return 'High Usage'
        }
    }
}

module.exports = Thermostat;