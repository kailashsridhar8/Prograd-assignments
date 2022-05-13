import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hidden: boolean = true;
  hide:boolean = true;
//user:any = {}; 
  errorMessage!:string;

  signupForm!: FormGroup;
  msg!: string;
  status!: string;
  show!: boolean;
  
  onSubmit() {
  
    // if (this.signupForm.invalid) {
    //   return;
    // }


    console.log("Hello"+this.signupForm.controls['phone'].value);

    this.userService.signUpUser(this.signupForm.controls['username'].value,this.signupForm.controls['email'].value, this.signupForm.controls['password'].value)
    .subscribe(
      
    //   {
     

    //   next: (data) => {
    //     console.log(data);
        // this.msg = data.message; 
        // this.notifyService.showSuccess(this.msg,"Login to continue!");
        // this.route.navigate(['/login']);
        // this.signupForm.reset();
       
    //   },

    //   error: (err) => {
    //     console.log(err);
    //     this.msg = JSON.parse(JSON.stringify(err)).error; 
    //     this.notifyService.showError(this.msg,"");
   
   
    //   },

   




    // }

    //   data=>{
    //   console.log(data);
    //  // this.user=data;
    // },err=>{
    //   console.log(err);
    //   this.errorMessage=err;
    // }
(response:any) => {

  this.msg = response.message; 

  if(this.msg==="Registered Successfully"){
    this.notifyService.showSuccess(this.msg,"Login to continue!");
    this.route.navigate(['/']);
    this.signupForm.reset();
  


  }
  else{

    this.notifyService.showError(response.message,"");
  }

}



    )


  }

 
  constructor(private route: Router,private userService: AuthService,    private fb: FormBuilder,private notifyService : NotificationService) {



      // this.signupForm = this.fb.group({
   
      //   email: ['', [Validators.required, Validators.email]],
      //   username: ['', [Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
      //   password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      //   confirmPassword: ['', [Validators.required]],
      // },
      //   {
      //     validators: this.customValidator.MatchPassword('password', 'confirmPassword'),
      //   }
      // );



    this.signupForm = new FormGroup({

      username:new FormControl('', [ Validators.required,
            Validators.minLength(6),
            // Validators.maxLength(20)
          ]),
          phone:new FormControl('', [ Validators.required,
            Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
            // Validators.maxLength(20)
          ]),


      email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(
        '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$')]),
      password: new FormControl('', [Validators.required,Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      )]),
      confirmPassword:new FormControl('', [Validators.required])

      
    
    },

  
  );

  }


  ngOnInit(): void {



   

    



  }

}
