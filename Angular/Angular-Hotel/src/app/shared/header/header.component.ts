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


  constNavslide(){
    console.log('navslide');
    const burger=document.querySelector('.burger');
    const nav=document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //Toggle Nav
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

        //animate links
    navLinks.forEach((link:any,index)=>{
        if(link.style.animation){
            link.style.animation=''
        } else
        {
            
   link.style.animation=`navLinkFade 0.2s ease forwards ${index/7+0.3}s`;
        }

    });
    //Burger Animation
    burger.classList.toggle('toggle');
    });
    console.log(burger);
  }
  ngOnInit(): void {
  }

}
