import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { ProductDetails } from '../models';

@Injectable()
export class CartService {
  private cartItems: ProductDetails[] = [];
  private cartProducts = new Subject<ProductDetails[]>();

  constructor() {}

  public addToCart(product: ProductDetails): void {
    this.cartItems.push(product);
    this.cartProducts.next(this.cartItems);
    product.inCart = true;
  }

  public removeFromCart(product: ProductDetails): void {
    this.cartItems = this.cartItems.filter(
      (item: ProductDetails) => item.id !== product.id
    );
    product.inCart = false;
    this.cartProducts.next(this.cartItems);
  }

  public removeAll(): void {
    this.cartItems.map((item) => (item.inCart = false));
    this.cartItems = [];
    this.cartProducts.next(this.cartItems);
  }

  public getItems(): Observable<ProductDetails[]> {
    return this.cartProducts.asObservable();
  }
}
