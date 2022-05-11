
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DialogSignupComponent } from '../../signup/dialog-signup/dialog-signup.component';
import { SignupComponent } from '../../signup/signup/signup.component';
@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.css']
})
export class DialogLoginComponent implements OnInit {
  hidden: boolean = true;
  hide:boolean = true;
//user:any = {}; 
  message!:any;


  loginForm: FormGroup;

  openDialog() {
    const dialogRef = this.dialog.open(DialogSignupComponent);

  
  }

  onSubmit() {

    if (this.loginForm.invalid) {
      return;
    }
    
    console.log(this.loginForm.controls['email'].value);
    this.authService.loginUser(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value)
    .subscribe(
      {


        next: (data) => {
          localStorage.setItem('user_id', data._id);
          this.message = data.msg; 
         // console.log("subscribed login data"+data.token);
         if (localStorage.getItem("user_id") ) {
          //...
          location.reload();
        }
          this.notifyService.showSuccess(this.message,"");
          // this.route.navigate(['/']);
    
          this.loginForm.reset();
        },
  
        error: (err) => {
          console.log("Error"+err);
          this.message = JSON.parse(JSON.stringify(err)).error; 
          this.notifyService.showError(this.message,"");
     
     
        },
  
       
  
  
  
  
      }
    
    
    )
  }
  constructor(public dialog: MatDialog,private route: Router,private authService:AuthService,private notifyService : NotificationService) {
    this.loginForm = new FormGroup({

    

      email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(
        '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$')]),
      password: new FormControl('', [Validators.required,Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      )]),
    

      
    
    },

  
  );
  }

  ngOnInit(): void {
  }

}
