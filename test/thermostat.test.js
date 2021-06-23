const assert = require('chai').assert;
const Thermostat = require('../src/thermostat')

describe('Testing Thermostat', function() {
    describe('#currentTemperature', function() {
        it('should begin with a temperature of 20 degrees', function() {
            let thermostat = new Thermostat;
            assert.strictEqual(thermostat.currentTemperature, 20)
        })
    })

    describe('#increaseTemperature/#decreaseTemperature', function() {
        it('should allow temperature to be increased', function() {
            let thermostat = new Thermostat;
            thermostat.increaseTemperature(5)
            assert.strictEqual(thermostat.currentTemperature, 25)
        })

        it('should allow temperature to be decreased', function() {
            let thermostat = new Thermostat;
            thermostat.decreaseTemperature(5)
            assert.strictEqual(thermostat.currentTemperature, 15);
        })
    })
    
})