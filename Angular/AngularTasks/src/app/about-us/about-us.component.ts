
import { Component, OnInit } from '@angular/core';
import { IUsers } from '../User';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  // users!: IUsers;
  users: any;

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      console.log(typeof data);
       this.users=data;
       console.log(this.users);
    });
 
  }

}
