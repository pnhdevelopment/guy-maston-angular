import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  slug: string;
  product: any;
  URL: string;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cart: CartService
  ) { }

  ngOnInit() {
  	this.slug = this.route.snapshot.params.slug;
    console.log(this.slug);
    this.URL = "https://immense-cliffs-99743.herokuapp.com/items?title_slug=" + this.slug;
    console.log(this.URL);

    this.http.get(this.URL).subscribe(data => {
      this.product = data[0];
      console.log(this.product);
    });

  }

  // controls tabs
  openTab(event, cityName){
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.opacity = 0;
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabcontent.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.opacity = "1";
    event.currentTarget.className += " active";
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

  // Fadein for image thumbnail
  changeOpacity(img) {
    img.style.opacity = 1;
  }

}
