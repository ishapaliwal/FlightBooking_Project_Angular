import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormsModule } from '@angular/forms';
import { ViewDetailsService } from "./view-details.service";
import { FlightBooking } from '../shared/FlightBooking';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css'],
  providers: [ViewDetailsService]
})
export class ViewDetailsComponent implements OnInit {

  flights: any;
  errorMessage: any;

  constructor(private viewDetailsService: ViewDetailsService) {

   }

  ngOnInit() {
    this.view();
}

  view() {
      this.viewDetailsService.view().subscribe(
        flights => this.flights = flights,
        error => this.errorMessage = <any>error);
    }
      

  delete(id: any) {
    this.viewDetailsService.delete(id)
      .subscribe(hero => this.flights = hero,
      error => this.errorMessage = <any>error);
  }

}

