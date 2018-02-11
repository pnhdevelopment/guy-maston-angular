import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';
  constructor(private router: Router) { }

    ngOnInit() {
    	//document.querySelector('#' + this.fragment).scrollIntoView()
        // this.router.events.subscribe((evt) => {
        //     window.scrollTo(0, 0)
        // });
    }

}
