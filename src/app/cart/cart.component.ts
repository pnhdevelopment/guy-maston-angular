import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
// import { AuthService } from '../auth.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  cartItems: any;
  totalPrice: any;

  // , public auth: AuthService
  constructor(private cart: CartService){ }

  ngOnInit() {
    //obtain cart items from localstorage
  	this.cartItems = this.cart.getItems();

    // get the total price from the cart object
    this.totalPrice = this.cart.getTotal();
  }

  removeFromCart(id){
    
    //removes from cart and stores new cart in localstorage
    this.cart.removeFromCart(id);
    
    //allows remove of item to be displayed "live"
    this.cartItems = this.cartItems.filter((item) => item.id !== id);

    //get the new total price
    this.totalPrice = this.cart.getTotal();
  }

}
