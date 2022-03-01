
//bean class of Flight

var Flight = function (flightId, aircraftName, fare, availableSeats, status) {
    this.flightId = flightId;
    this.aircraftName = aircraftName;
    this.fare = fare;
    this.availableSeats = availableSeats;
    this.status = status;
}

Flight.toObject = function (result) {
    return new Flight(result.flightId, result.aircraftName, result.fare, result.availableSeats, result.status);
}


module.exports = Flight;