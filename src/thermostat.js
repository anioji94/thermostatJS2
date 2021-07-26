class Thermostat {
    constructor() {
        this.defaultTemperature = 20
        this.currentTemperature = this.defaultTemperature
        this.psOnMaxTemperature = 25
        this.posOffMaxTemperature = 32
        this.minimumTemperature = 10
        this.powersavingMode = true
        this.energyUsage = this.energyReport()
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
        this.energyReport();
    }

    increaseTemperature(value = 1) {
        this.#changeTemperature(value);
    }

    decreaseTemperature(value = 1) {
        this.#changeTemperature(value *= -1);
    }

    offSwitchPowersaving() {
        this.powersavingMode = false
        return 'off'
    }

    onSwitchPowersaving() {
        this.powersavingMode = true
        return 'on'
    }

    resetTemperature() {
        this.currentTemperature = this.defaultTemperature
    }

    energyReport() {
        if( this.currentTemperature <= 18 ) {
            return 'low-usage'
        } else if( this.currentTemperature > 18 && this.currentTemperature <= 25 ) {
            return 'medium-usage'
        } else if( this.currentTemperature > 25 ) {
            return 'high-usage'
        }
    }
}

module.exports = Thermostat