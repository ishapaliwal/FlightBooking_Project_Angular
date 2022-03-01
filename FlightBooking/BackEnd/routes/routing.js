var express = require('express');
var routing = express.Router();
var FlightBookingBL = require('../public/javascripts/FlightBookingBL');
var FlightBooking = require('../public/javascripts/FlightBooking');

//Insert and update
routing.post('/bookFlight', function (req, res, next) {
    var flightBooking = FlightBooking.toObject(req.body);
    FlightBookingBL.bookFlight(flightBooking).then(function (bookingId) {

        res.json({ "message": "Flight booking is successful with booking Id :" + bookingId });
    }).catch(function (err) {
        next(err);
    })
})

//to view details of a particular booking Id
routing.get('/viewBooking/:id', function (req, res, next) {

    FlightBookingBL.retrieveBooking(req.params.id).then(function (flight) {
        res.json({ "message": "Details found successfully for booking Id: " + flight.bookingId, "bean": flight });
    }).catch(function (err) {
        next(err);
    })
})

routing.get('/getallId', function (req, res, next) {

    FlightBookingBL.getAllBookingId().then(function (bookings) {

        res.json(bookings)
    }).catch(function () {
        next(err)
    })
})

routing.delete('/delete/:id', function (req, res, nex) {

    var id = parseInt(req.params.id)
    FlightBookingBL.deleteBooking(id).then(function (response) {

        if (response.result.n > 0) {
            res.json({ "message": "Successfully deleted Id: " + id })
        }
        else {
            throw new Error("Sorry Cannot delete Id: " + id)

        }
    }).catch(function (err) {

        next(err)
    })
})


module.exports = routing;