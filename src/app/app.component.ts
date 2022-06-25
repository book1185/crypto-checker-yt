import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {


  }
  selectedCurrency: string = "THB";
  constructor(){

  }
  sendCurrency(event:string){
    console.log(event)
  }



}
