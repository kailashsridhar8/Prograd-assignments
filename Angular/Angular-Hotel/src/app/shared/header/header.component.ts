import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
declare function navSlide(): void;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService,private route: Router) { }

  logout(){
    this.authService.Logout()
    localStorage.clear()
    this.route.navigate(['/'])
  }


  ngOnInit(): void {
  }

}
