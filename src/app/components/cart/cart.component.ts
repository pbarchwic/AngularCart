import { Component, OnInit } from '@angular/core';
import { ProductDetails } from 'src/app/models';
import { CartService } from 'src/app/services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public cartItems: ProductDetails[] = [];

  constructor(private readonly cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getItems().subscribe((products) => {
      this.cartItems = products;
    });
  }

  public removeItem(product: ProductDetails): void {
    this.cartService.removeFromCart(product);
  }

  public removeAll(): void {
    this.cartService.removeAll();
  }

  get sumPrice(): number {
    return this.cartItems
      .map((item) => item.price)
      .reduce((prev, curr) => prev + curr, 0);
  }
}
