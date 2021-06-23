const assert = require('chai').assert;
const expect = require('chai').expect;
const Thermostat = require('../src/thermostat')

describe('Testing Thermostat', function() {
    describe('#currentTemperature', function() {
        it('should begin with a temperature of 20 degrees', function() {
            let thermostat = new Thermostat;
            assert.strictEqual(thermostat.currentTemperature, 20)
        })
    
        it('should have a minimum temperature of 10 degrees', function() {
            let thermostat = new Thermostat;
            expect(function() {
                thermostat.decreaseTemperature(11)
            }).to.throw('Minimum temperature is 10 Degrees');
            // assert.strictEqual(thermostat.currentTemperature, 20)
        })
    })

    describe('Powersaving Mode', function() {
        it('should have a powersaving mode', function() {
            let thermostat = new Thermostat;
            assert.exists(thermostat.powersavingMode)
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