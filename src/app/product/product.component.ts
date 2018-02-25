import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  slug: string;
  product: any;
  URL: string;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

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

  // Fadein for image thumbnail
  changeOpacity(img) {
    img.style.opacity = 1;
  }

}
