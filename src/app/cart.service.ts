import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

	cart: any;
	totalPrice: number;

	constructor(){
		this.cart = localStorage.getItem('guy-maston-cart') ? JSON.parse(localStorage.getItem('guy-maston-cart')) : [];
	}

	addToCart(item){

		// check if item is already in cart
		if (this.cart.indexOf(item) !== -1) {
      		return;
    	}

    	// if item isn't already in cart, push it into the cart
    	this.cart.push(item);

    	//add new cart object ot localStoage
    	localStorage.setItem('guy-maston-cart', JSON.stringify(this.cart));

	}

	getItems(){
		return this.cart;
	}

	removeFromCart(id){
		this.cart = this.cart.filter((item) => item.id !== id);
		localStorage.setItem('guy-maston-cart', JSON.stringify(this.cart));
	}

	getTotal(){
		this.totalPrice = 0;	
		this.cart.forEach((item) => this.totalPrice += item.price);
		return this.totalPrice;
	}
	

}
