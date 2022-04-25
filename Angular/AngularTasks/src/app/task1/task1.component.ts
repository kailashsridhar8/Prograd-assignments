import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
  numberArray!: number[];


  constructor() { }
  enteredValue:string="";
  onLogout(form: string){
    
   console.log(form);
  }
  ngOnInit(): void {
    this.numberArray =[1,22,3,4,5,9,7,8,92,10];
    
  }

}
