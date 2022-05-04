import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../user-service.service';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  user_name:string="admin";
  password:string="admin"; 
  submitted = false;

  onSubmitTemplate(form:NgForm){
    // console.log(form.value.username);
    if(form.value.username==this.user_name&&form.value.password==this.password){
      this.userService.changePermission();
    }
    this.userService.addUser(form.value.username, form.value.password).subscribe(data => {
      console.log(data);
    })

  }
  
  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
  }

}
