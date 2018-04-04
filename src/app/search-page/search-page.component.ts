import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.sass']
})
export class SearchPageComponent implements OnInit {

  constructor(
    private http: HttpClient, 
    private route: ActivatedRoute, 
    private router: Router, 
    private cart: CartService) { }

  items: any;
  URL: any;
  baseURL: any = "https://immense-cliffs-99743.herokuapp.com/items";

  q: any;
  showQuery: any;
  new: any;
  special: any;
  category: any;
  brand: any;
  price: any;
  _sort: any;
  _order: any;

  //initializing p to one
  p: number = 1;  

  ngOnInit(): void{

    this.route.queryParams.subscribe(params => {
      this.showQuery = params['q'];

      this.q        = params['q']         ?   "?q=" + params['q']         :   "?q=";
      this.new      = params['new']       ?   "&new=" + params['new']       :   "";
      this.special  = params['special']   ?   "&special=" + params['special']   :   "";
      this.category = params['category']  ?   "&category=" + params['category']  :   "";
      this.brand    = params['brand']     ?   "&brand=" + params['brand']     :   "";


      if(params['price'] == 'under-25'){
        this.price = '&price_lte=25';
      }else if(params['price'] == 'from-25-to-50'){
        this.price = '&price_gte=25&price_lte=50';
      }else if(params['price'] == 'from-50-to-250'){
        this.price = '&price_gte=50&price_lte=250';
      }else if(params['price'] == 'greater-than-250'){
        this.price = '&price_gte=250';
      }else{
        this.price = '';
      }

      this._sort    =  params['_sort']     ?   "&_sort=price"  :   "";
      this._order    = params['_order']     ?   "&_order=" + params['_order']  :   "";


      this.URL = this.baseURL + this.q + this.new + this.special + this.category + this.brand + this.price + this._sort + this._order;

      this.http.get(this.URL).subscribe(data => {
        this.items = data;
        console.log(this.items);
      });

    });

  }

  onSelectChange(value){
    console.log(value);
    this.router.navigate(['search'], { queryParams: { _sort: 'price', _order: value }, queryParamsHandling: 'merge' });
  }

  addToCart(item){
    this.cart.addToCart(item);
  }

  //toggles the price, category and brand
  toggle(el){
    el.querySelector('.chevron').classList.toggle("active");
    el.nextElementSibling.classList.toggle("show");
  }

  scrollUp(){
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  // Fade-in for image thumbnails
  changeOpacity(img){
    img.style.opacity = 1;
  }

  refineSearch(f:NgForm){
    console.log(f.value.category);
    console.log(f.value.brand);
    this.router.navigate(['/search'], { queryParams: { category: f.value.category, brand: f.value.brand, price: f.value.price } });
  }

}
