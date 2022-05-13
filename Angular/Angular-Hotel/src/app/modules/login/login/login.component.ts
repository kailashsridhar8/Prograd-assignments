import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hidden: boolean = true;
  hide:boolean = true;
//user:any = {}; 
  message!:any;
  exception:string=""

  loginForm: FormGroup;


  // onSubmit() {

  //   if (this.loginForm.invalid) {
  //     return;
  //   }
    
  //   console.log(this.loginForm.controls['email'].value);
  //   this.authService.loginUser(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value)
  //   .subscribe(
  //     {


  //       next: (data) => {
  //         localStorage.setItem('user_id', data._id);
  //         this.message = data.msg; 
  //        // console.log("subscribed login data"+data.token);
        
  //         this.notifyService.showSuccess(this.message,"");
  //         this.route.navigate(['/']);
  //         this.loginForm.reset();
  //       },
  
  //       error: (err) => {
  //         console.log("Error"+err);
  //         this.message = JSON.parse(JSON.stringify(err)).error; 
  //         this.notifyService.showError(this.message,"");
     
     
  //       },
  
       
  
  
  
  
      // }
    
    
  //   )
  // }













  onSubmit() {
  
    
    this.authService.loginUser(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value).subscribe(


      
        (response:any)=>{
      

          this.message = response.msg; 

          if(this.message==="Logged In"){
            this.notifyService.showSuccess(this.message,"");
          
            let token=response.token
            console.log("Token : "+response);
             let role=response.role
             console.log("role"+role);
            localStorage.setItem("TOKEN",token);
             localStorage.setItem("Login_Status",role)
             localStorage.setItem("user_id",response._id);
            // var currentDate = new Date();
            // var futureDate = new Date(currentDate.getTime() + 30*60000);
            // localStorage.setItem("Expiration_Time",""+futureDate.getTime())
            this.authService.Login()

            if(role==="admin"){
              this.route.navigate(['/admin-dashboard'],{ replaceUrl: true });
              this.loginForm.reset();
  
            }
            else{
              this.route.navigate(['/home'],{ replaceUrl: true });
              this.loginForm.reset();
            }
           


          }
          else{
            this.notifyService.showError(this.message,"");
          }
         // console.log("subscribed login data"+data.token);
        // console.log("Messageeee"+response.msg);
       
        
        }
        // ,
        // error:(error)=>{
        //   console.log("Error"+error);
        //   this.message = JSON.parse(JSON.stringify(error)).error; 
        //   this.notifyService.showError(this.message,"");
     
        // }

      
//       (response:any)=>{
      
//         console.log(typeof response);
//       if(response==="UNF"){
//         this.exception="No user found with these credentials try again (or) Please Login..!"
//       }
//       else if(response=="WP"){
//         this.exception="Incorrect Password. Try again..!"
//       }
//       else{
      
//         this.exception=""
//         // let res=JSON.parse(response)
// let res=response;
        // let token=res.token
        // // let role=res.role
        // localStorage.setItem("TOKEN",token);
        // // localStorage.setItem("Login_Status",role)
        // var currentDate = new Date();
        // var futureDate = new Date(currentDate.getTime() + 30*60000);
        // localStorage.setItem("Expiration_Time",""+futureDate.getTime())
        // this.authService.Login()
        // this.route.navigate(['/'],{ replaceUrl: true });
//       }
//     }
    
    )

  }
  constructor(private route: Router,private authService:AuthService,private notifyService : NotificationService) {
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
