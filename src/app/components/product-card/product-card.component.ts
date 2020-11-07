import { Component, Input, OnInit } from '@angular/core';
import { ProductDetails } from 'src/app/models';
import { CartService } from 'src/app/services';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: ProductDetails;
  constructor(private readonly cartService: CartService) {}

  ngOnInit() {}

  public addToCart(product: ProductDetails): void {
    product.inCart = true;
    this.cartService.addToCart(product);
  }
}
