//var db = require('./Database');
var Flight = require('./Flight');
var FlightBooking = require('./FlightBooking');
// var bmongo = require('promised-mongo').compatible();
// var db = bmongo('EXAM_DB', ['FlightBooking']);

var connection = require('./connections');

var flightBookingArray

var newBookingId

var FlightBookingDAL = {}

FlightBookingDAL.generateId = function () {
    return connection.getConnection().then(function (db) {
        var my_collection = db.collection('FlightBooking');
        return my_collection.distinct("bookingId").then(function (ids) {
            var max_flight_booking_id = Math.max(...ids);
            console.log("in before if",max_flight_booking_id)
            if (max_flight_booking_id==-Infinity){
                max_flight_booking_id=2000
            }
            console.log("after if ",max_flight_booking_id)
            return max_flight_booking_id + 1;
        })
    })
}

FlightBookingDAL.checkAvailability = function (flightId) {
    return connection.getConnection().then(function (db) {
        console.log(flightId);
        return db.collection("Flight").findOne({ "flightId": flightId }).then(function (flightRecord) {
            if (!flightRecord || flightRecord.length == 0) return null;
            else return flightRecord;
        })
    })
}


FlightBookingDAL.bookFlight = function (flightBooking) {
    return connection.getConnection().then(function (db) {
        var my_collection = db.collection('FlightBooking');
        return FlightBookingDAL.generateId().then(function (fid) {
            id = fid;
            return my_collection.insert({
                "bookingId": fid, "passengerName": flightBooking.passengerName,
                "noOfTickets": flightBooking.noOfTickets, "flightId": flightBooking.flightId, "totalAmount": flightBooking.totalAmount
            }).then(function (flight) {
                return db.collection("Flight").findOne({ "flightId": flightBooking.flightId }).then(function (flightRecord) {
                    return db.collection("Flight").update({ "flightId": flightBooking.flightId }, { $set: { "availableSeats": flightRecord.availableSeats - flightBooking.noOfTickets } })
                }).then(function (saved) {
                    if (saved.result.nModified < 1) console.log("Seats could not be updated");
                    else return id;
                })
            })
        })
    })
}

FlightBookingDAL.retrieveBook = function (flightBookingId) {
    return connection.getConnection().then(function (db) {
        return db.collection("FlightBooking").findOne({ "bookingId": Number(flightBookingId) }).then(function (saved) {
            if (!saved) throw new Error("No record with Booking Id: " + flightBookingId);
            else return FlightBooking.toObject(saved);
        });
    });
}

FlightBookingDAL.getAllBookingId =function(){
    return connection.getConnection().then(function (db) {
        return db.collection("FlightBooking").find().toArray().then(function(flightDetails){
           return flightDetails;            
        }).catch(function(err){
            return err;
        })
    })
}

FlightBookingDAL.deleteBooking= function(id){
    return connection.getConnection().then(function(db){
        return db.collection("FlightBooking").remove({"bookingId":id}).then(function(response){
            return response
        }).catch(function(err){
            return err;
        })
    })
}

module.exports = FlightBookingDAL;

