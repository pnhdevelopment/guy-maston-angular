import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.sass']
})
export class SearchFormComponent implements OnInit {

  constructor(private router: Router){ }

  ngOnInit() {
  }

  refineSearch(f:NgForm){

    console.log(f.value.category);
    console.log(f.value.brand);

    this.router.navigate(['/search'], { queryParams: { category: f.value.category, brand: f.value.brand, price: f.value.price } });
  
  }


}
