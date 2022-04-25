import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  numberArray!: number[];
  enteredValue!:string;
  Fahrenheit!:number;

  onLogout(form: string){
     console.log(form);
  }

  constructor() { }

  ngOnInit(): void {
    this.numberArray =[1,22,3,4,5,9,7,8,92,10];
  }

}
