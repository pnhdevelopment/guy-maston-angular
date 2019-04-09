import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  // , public auth: AuthService
  constructor(private router: Router) { }

  ngOnInit() {
  }

  submitValue(f:NgForm):void {
    console.log(f.value.q);
    this.router.navigate(['/search'], { queryParams: { q: f.value.q } });
  }

}
