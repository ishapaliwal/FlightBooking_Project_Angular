import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { HttpClientModule } from "@angular/common/http";
import { ViewDetailsComponent } from './view-details/view-details.component';
import { MessagePipe } from './book-flight/message.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BookFlightComponent,
    ViewDetailsComponent,
    MessagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
