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

        it('should, when active, cap the max temperature at 25 degrees', function() {
            let thermostat = new Thermostat;
            expect(function() {
                thermostat.increaseTemperature(6);
            }).to.throw('Powersaving Mode is On. Max temp is 25 Degrees')
        })

        it('should, when deactivated, allow temperature to exceed 25 Degrees', function() {
            let thermostat = new Thermostat;
            thermostat.powersavingMode = false
            expect(function() {
                thermostat.increaseTemperature(6);
            }).to.not.throw()
        })

        it('should, when deactivated, cap the max temperature at 32 Degrees', function() {
            let thermostat = new Thermostat;
            thermostat.powersavingMode = false
            expect(function() {
                thermostat.increaseTemperature(13);
            }).to.throw('Powersaving Mode is Off. Max temp is 32 Degrees')
        })

        it('should allow users to deactivate Powersaving Mode', function() {
            let thermostat = new Thermostat;
            thermostat.offSwitchPowersaving()
            assert.strictEqual(thermostat.powersavingMode, false)
        })

        it('should allow users to activate Powersaving Mode', function() {
            let thermostat = new Thermostat;
            thermostat.powersavingMode = false
            thermostat.onSwitchPowersaving()
            assert.strictEqual(thermostat.powersavingMode, true)
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

    describe('#resetTemperature', function() {
        it('should reset the temperature to 20', function() {
            let thermostat = new Thermostat;
            thermostat.increaseTemperature(3)
            thermostat.resetTemperature()
            assert(thermostat.currentTemperature, 20)
        })
    })
    
    
    
})