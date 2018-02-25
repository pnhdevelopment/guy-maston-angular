import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CartService } from '../cart.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit {


  items: any;
  URL: any = "https://immense-cliffs-99743.herokuapp.com/items";	

  constructor(private http: HttpClient, private cart: CartService){ }

  ngOnInit() {

    this.http.get(this.URL).subscribe(data => {
        this.items = data;
      });

  }

  filterItemsOfCategory(type){
    return this.items.filter(x => x.category == type);
  }

  addToCart(item){
    this.cart.addToCart(item);
  }

  // Fade-in for image thumbnails
  changeOpacity(img){
    img.style.opacity = 1;
  }

}
