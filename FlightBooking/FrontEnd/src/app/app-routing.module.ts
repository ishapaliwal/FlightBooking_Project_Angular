import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewDetailsComponent } from './view-details/view-details.component'; 
import { BookFlightComponent } from './book-flight/book-flight.component';


const routes: Routes = [
  {path: 'book', component: BookFlightComponent},
  {path: 'view', component: ViewDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
