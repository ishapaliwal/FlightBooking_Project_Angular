var Validator = {};

Validator.validateFlightId = function(flightId){
    var pattern = new RegExp("^IND-[1-9][0-9]{2}$");
    if(flightId.length != 7 && !(pattern.test(flightId))){
        throw new Error("Error in flight Id");
    }
}


Validator.validateBookingId = function(bookingId){
    if(new String(bookingId).length != 4){
        throw new Error("Error in booking Id");
    }
}

module.exports = Validator;