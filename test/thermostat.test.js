const assert = require('chai').assert;
const Thermostat = require('../src/thermostat')

describe('Testing Thermostat', function() {
    describe('Temperature Read-out', () => {
        it('should begin with a temperature of 20 degrees', function() {
            let thermostat = new Thermostat;
            assert.strictEqual(thermostat.currentTemperature, 20)
        })
    })
    
})