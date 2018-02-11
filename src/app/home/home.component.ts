import { Component, OnInit } from '@angular/core';

import { PRODUCTS } from '../mock-products';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit {

  products = PRODUCTS;	

  constructor() { }

  ngOnInit() {
  }

  filterItemsOfCategory(type){
    return this.products.filter(x => x.category_slug == type);
  }

}
