import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  // public auth: AuthService
  constructor() { }

  ngOnInit() {
  }

  //toggles the mobile navbar
  show:boolean = false;

  toggle(){
  	this.show = !this.show
  }

}
