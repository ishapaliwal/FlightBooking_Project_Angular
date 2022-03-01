var FlightBooking = function (bookingId, passengerName, noOfTickets,totalAmount, flightId) {
    this.bookingId = bookingId;
    this.passengerName = passengerName;
    this.noOfTickets = noOfTickets;
    this.totalAmount = totalAmount;
    this.flightId = flightId;
}

FlightBooking.toObject = function (obj) {
    return new FlightBooking(obj.bookingId, obj.passengerName, obj.noOfTickets, obj.totalAmount, obj.flightId);
}

module.exports = FlightBooking;