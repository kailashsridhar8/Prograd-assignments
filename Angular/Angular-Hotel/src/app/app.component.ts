import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Hotel';
  constructor(private router: Router){}
  ngOnInit(): void {
    localStorage.setItem("IS_LOGGEDIN","NO")
    // if(localStorage.getItem("Login_Status")==="user"){
    //   this.router.navigate(['/home']);
    // }
    //  if(localStorage.getItem("Login_Status")==="admin"){
    //   this.router.navigate(['/admin']);
    // }
   
  }
}
