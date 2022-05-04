import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hidden: boolean = true;
  hide:boolean = true;
//user:any = {}; 
  errorMessage!:any;


  loginForm: FormGroup;


  onSubmit() {
    console.log(this.loginForm.controls['email'].value);
    this.authService.loginUser(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value)
    .subscribe(
      {


        next: (data) => {
          console.log(data);
          this.errorMessage = 'Logged In Sucessfully'; 
        
        
         
        },
  
        error: (err) => {
          console.log(err);
          this.errorMessage = JSON.parse(JSON.stringify(err)).error; 
        
     
     
        },
  
       
  
  
  
  
      }
    
    
    )
  }
  constructor(private authService:AuthService) {
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
