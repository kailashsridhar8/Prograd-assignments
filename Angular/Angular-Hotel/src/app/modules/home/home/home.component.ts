import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import { HotelService } from 'src/app/core/services/hotel.service';
import { NotificationService } from 'src/app/core/services/notification.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  myControl = new FormControl();
  fromDateControl = new FormControl();
  fromDate:any;
  toDate:any;
  searchForm: FormGroup;
  options: string[] = [];
  rough: any = {};
  filteredOptions!: Observable<string[]>;
  noOfDays!: Number;
  hotels: any = [];
  minDate = new Date();
  onSubmit() {

    if (this.searchForm.invalid||!this.myControl.value) {
      return;
    }
    

const city=this.myControl.value;



this.fromDate=this.searchForm.controls['fromDate'].value;
this.toDate=this.searchForm.controls['toDate'].value;

console.log("A"+this.fromDate);
console.log("B"+this.toDate);

localStorage.setItem('fromDatel',this.fromDate);
localStorage.setItem("toDatel",this.toDate);



    const from = this.searchForm.controls['fromDate'].value.getTime();

    const to = this.searchForm.controls['toDate'].value.getTime();

    const diff = to - from;
    const oneDay = 1000 * 60 * 60 * 24;
    const days = diff / oneDay;
    this.noOfDays=days;
    var event = new Date(this.searchForm.controls['fromDate'].value);
    let date = JSON.stringify(event);
    console.log("date"+event);
    date = date.slice(1, 11);

    // console.log('from' + new Date(date));
    this.hotelService.getHotelsByCity(city, days).subscribe({
      next: (data) => {
        console.log(data);
        this.hotels = data;

        this.notifyService.showInfo(
         
          this.hotels.length + ' Hotels Available in ' + this.myControl.value,""
        );
      },
      error: (data) => {
        
      },
    });
      this.hotelService.setFromDate(this.searchForm.controls['fromDate'].value);
      this.hotelService.setToDate(this.searchForm.controls['toDate'].value);
    // this.route.navigate(['/hotel/:city']);

  }

  constructor(
    private route: Router,
    private hotelService: HotelService,
    private notifyService: NotificationService,
    private authService: AuthService
  ) {
    this.searchForm = new FormGroup({
      fromDate: new FormControl('', [Validators.required]),
      toDate: new FormControl('', [Validators.required]),
    });

    // console.log(this.hotelService.fromDate);
  }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );

    this.hotelService.getAllCities().subscribe({
      next: (data) => {
        for (let city of data) {
          // console.log(city.name);
          this.options.push(city.name);
        }

        // console.log(this.options);
      },

      error: (err) => {
        console.log("cities"+err);
      },
    });

    this.hotelService.getAllHotels().subscribe({
      next: (data) => {
      this.hotels=data;
        // console.log(data);
      },

      error: (err) => {
        // console.log("Inside this"+err.message);
       console.log(err);

       if(err==="IV_JWT"){
      
        
        this.authService.getAccessToken().subscribe({next:(res:any)=>{
         
          localStorage.removeItem("TOKEN")
        
          if(res==="jwt expired"){
            this.route.navigate(['/login'])
            localStorage.clear()
            this.authService.Logout()
            this.authService.removeToken()
            return
          }
          let response=JSON.parse(res)
          let token=response.token
          let role=response.role

          localStorage.setItem("TOKEN",token);
          // localStorage.setItem("Login_Status",role);
          console.log(" "+role);
          
          //this.route.navigate(['/home'])
          window.location.reload()
        }});

       }
       else{
         this.notifyService.showError("Some error occurred","");
       }
       console.log("err");



      },
    });

   




  }

  //  getFullName(item):void=> {
  //   return [item.firstname,item.lastname].join(" ");
  // }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
