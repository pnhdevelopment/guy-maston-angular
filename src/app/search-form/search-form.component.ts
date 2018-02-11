import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.sass']
})
export class SearchFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  processSearch(e){
  	e.preventDefault();
  	console.log(e.target.elements);
  }

}
