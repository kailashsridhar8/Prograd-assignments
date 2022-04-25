import { Component, OnInit } from '@angular/core';
import { from, Observable, of, interval,fromEvent } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {

  constructor() { }

  
  // myObservable=new Observable((observer)=>{
  //   setTimeout(()=>{observer.next(30)},3000),
  //   setTimeout(()=>{observer.next(10)},4000),
  //   setTimeout(()=>{observer.next(20)},5000)

  // });

  //  2 //myObservable=of(20,30,40);

  //  myObserver={
  //   next: (value:number) =>{console.log(value)},
  //   error: (err:Error) =>{console.log(err)},
  //   complete: () => {console.log("completed")}
  // };



  

  ngOnInit(): void {
    // this.myObservable.subscribe((value)=>{
    //     console.log(value);  
    // });

    // 2 // this.myObservable.subscribe(this.myObserver);
    // const secondsCounter = interval(1000);
    // const subscription= secondsCounter.subscribe((n: number)=>
    //   console.log(`Its been ${n+1} seconds since subscribing!`));
    const el = document.getElementById('button')!;
    const mouseMoves = fromEvent<MouseEvent>(el, 'click');
    // const subscription=mouseMoves.subscribe( evt =>{
    //   console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);
    //   if (evt.clientX < 40 && evt.clientY < 40) {
    //     subscription.unsubscribe();
    //   }
    // });
    const subscription=mouseMoves.subscribe(() => console.log("Hey Observable"));
  }

}
