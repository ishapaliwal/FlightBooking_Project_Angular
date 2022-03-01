var FlightBookingDAL = require('./FlightBookingDAL');
var Flight = require('./Flight');
var FlightBooking = require('./FlightBooking');
var Validator = require('./Validator');


var FlightBookingBl = {}

FlightBookingBl.bookFlight = function (flightBooking) {
   
    Validator.validateFlightId(flightBooking.flightId);
    return FlightBookingDAL.checkAvailability(flightBooking.flightId).then(function (flight) {
        
        if (flight == null || flight.status == 'Cancelled') {
            throw new Error("Flight unavailable or cancelled");
        }
        else if (flight.availableSeats < flightBooking.noOfTickets) {
            throw new Error("Requested number of seats unavailable");
        }
        else {
            flightBooking.totalAmount = flightBooking.noOfTickets * flight.fare;
            promise = FlightBookingDAL.bookFlight(flightBooking);
            return promise;
        }
    }).then(function (bookingId) {
        return bookingId;
    })
}

FlightBookingBl.retrieveBooking = function(bookingId) {
    return FlightBookingDAL.retrieveBook(bookingId).then(function (flight) {
        if (flight == null) {
            throw new Error();
        }
        else {
            return flight;
        }

    }).then(function (booking) {
        return booking;
    })
}

FlightBookingBl.getAllBookingId= function(){
    return FlightBookingDAL.getAllBookingId().then(function(bookings){
        //console.log("got bookings", bookings)
         return bookings;
    }).catch(function(err){
        return err
    })
}

FlightBookingBl.deleteBooking= function(id){
    return FlightBookingDAL.deleteBooking(id).then(function(response){
        return response
    }).catch(function(err){
        return err
    })
}


module.exports = FlightBookingBl;