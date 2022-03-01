import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { BookFlightService } from "./book-flight.service";

import { FlightBooking  } from '../shared/FlightBooking';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css'],
  providers: [BookFlightService]
})
export class BookFlightComponent implements OnInit {

  errorMessage: String = "";
  successMessage: String = "";
  submitted: any;
  flight: any;

  constructor(private fb: FormBuilder, private bookFlightService: BookFlightService) { }

  bookingForm = this.fb.group({
    passengerName: ['',Validators.required],
    noOfTickets: ['', [Validators.required, Validators.min(1)]],
    flightId: ['',[Validators.required, validateFlight]]
  })

  ngOnInit() {}



  book() {
    this.submitted=true;
    this.bookFlightService.getData(this.bookingForm.value)
    .subscribe(hero => this.flight.push(hero),
    //message => this.successMessage = message,
    //(res: Response) => console.log(res)
    error => this.errorMessage = <any>error
    );
    }
  }

function validateFlight(c: FormControl) {
  let idRegexp = /^([A-Z]{3})-([0-9]{3})$/;
  return idRegexp.test(c.value) ? null : {
    idInvalid: {
      message: "Enter valid Flight Id"
}

}
}