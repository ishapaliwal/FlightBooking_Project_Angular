import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  agree:boolean =false;

  constructor(private router: Router) { }


  agreed(val: any){
    if (val==1){
    this.agree=true;
    this.router.navigate(['/book']);}
    else if(val==2){
    this.agree=true;
    this.router.navigate(['/view']);}
  }
}