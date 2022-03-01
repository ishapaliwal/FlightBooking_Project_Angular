//testing of FlightBookingDAL service class

var flightbooking = require('../javascripts/FlightBookingDAL');

describe('Check FlightId', function () {

    it('Valid Flight Id', function(done){
        var fId = 1001;
        var result;
        flightbooking.checkAvailability(fId).then(function(flight){
       
            result = flight;
            expect(result).toMatch({"flightId": 1001,"AircraftName":'Delta Airlines',"fare":600,"availableSeats":3,"status":'Running'});
            done()            
        })
   })
   
    it('Invalid Flight Id', function(done){
        var fId = 1009;
        var result;
        flightbooking.checkAvailability(fId).then(function(flight){
            result = flight;
            return result;           
        }).then(function(data){
            expect(data).toBeFalsy();
            done()
        })
    })    

  
})

