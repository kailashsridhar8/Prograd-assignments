import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
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
  searchForm: FormGroup;
  options: string[] = [];
  rough: any = {};
  filteredOptions!: Observable<string[]>;
  noOfDays!: Number;
  hotels:any=[];


  onSubmit() {
    // console.log('City' + this.myControl.value);
    // console.log(
    //   'fromDate' + this.searchForm.controls['fromDate'].value.getTime()
    // );
    // console.log('toDate' + this.searchForm.controls['toDate'].value.getTime());

    const from = this.searchForm.controls['fromDate'].value.getTime();

    const to = this.searchForm.controls['toDate'].value.getTime();

    const diff = to - from;
    const oneDay = 1000 * 60 * 60 * 24;
      const days=diff / oneDay;


      var event = new Date(this.searchForm.controls['fromDate'].value);
      let date = JSON.stringify(event)
        date = date.slice(1,11)


console.log("from"+new Date(date));
    this.hotelService.getHotelsByCity(this.myControl.value,days).subscribe({


      next: (data) => {
        console.log(data);
        this.hotels = data;

        this.notifyService.showInfo("For "+days+" Nights",this.hotels.length+" Hotels Available in "+this.myControl.value);
      },
      error: (data) => {

      }

    })

  }

  constructor(
    private route: Router,
    private hotelService: HotelService,
    private notifyService: NotificationService
  ) {
    this.searchForm = new FormGroup({
      fromDate: new FormControl('', [Validators.required]),
      toDate: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );

    this.hotelService.getAllCities().subscribe({
      next: (data) => {
        for (let city of data) {
          console.log(city.name);
          this.options.push(city.name);
        }

        console.log(this.options);
      },

      error: (err) => {
        console.log(err);
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
