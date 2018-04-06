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

  addToCart(el, item){
    
    //adds item to cart
    this.cart.addToCart(item);

    //adds tooltip class so that 'Added to cart' message appears
    el.childNodes[1].classList.add("clicked");

    //removes tooltip class so that 'Added to cart' message disappears
    setTimeout(function(){
      el.childNodes[1].classList.remove("clicked");
    }, 2000);

  }

  // Fade-in for image thumbnails
  changeOpacity(img){
    img.style.opacity = 1;
  }

}
