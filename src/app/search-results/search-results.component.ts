import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../mock-products';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.sass']
})
export class SearchResultsComponent implements OnInit {

  products = PRODUCTS;

  //initializing p to one
  p: number = 1;	

  constructor() { }

  ngOnInit() {
  }

  scrollUp(){
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

}
