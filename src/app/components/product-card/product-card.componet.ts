import { Component, Input, OnInit } from '@angular/core';
import { ProductDetails } from 'src/app/models';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.componet.html',
  styleUrls: ['./product-card.componet.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: ProductDetails;
  constructor() {}

  ngOnInit() {
    console.log(this.product);
  }
}
