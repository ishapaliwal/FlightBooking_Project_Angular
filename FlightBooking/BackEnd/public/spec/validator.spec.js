//testing of validator classes

var Validator = require('../javascripts/Validator');

describe('Validate flighId', function () {
    it('Entered Invalid  length of flightId', function () {
        try {
            Validator.validateFlightId(10111);
        } catch (error) {
            expect(error.message).toEqual("Error in flight Id");
        }
    });

    it('Entered valid length of  flight Id', function () {
        expect(Validator.validateFlightId(1005)).toBeUndefined();
    });

})

