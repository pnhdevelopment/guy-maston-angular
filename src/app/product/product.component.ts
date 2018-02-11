import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { PRODUCTS } from '../mock-products';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  products = PRODUCTS;
  slug: string;
  product: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  	this.slug = this.route.snapshot.params.slug;
  	this.product = this.products.filter(x => x.slug == this.slug)[0];

    // if(!this.product){
    //   this.router.navigate(['/404']);
    // }
    
    console.log(this.product);
  	console.log(this.slug);

    


  }

}
