import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { ProductDetails } from '../models';

@Injectable()
export class CartService {
  private cartItems: ProductDetails[] = [];
  private cartProducts = new Subject<ProductDetails[]>();

  constructor() {}

  public addToCart(product: ProductDetails): void {
    const checkCart = this.checkCart(product);
    if (!checkCart) {
      this.cartItems.push(product);
      product.inCart = true;
      this.cartProducts.next(this.cartItems);
    }
  }

  public removeFromCart(product: ProductDetails): void {
    this.cartItems = this.cartItems.filter(
      (item: ProductDetails) => item.id !== product.id
    );
    delete product.inCart;
    this.cartProducts.next(this.cartItems);
  }

  public removeAll(): void {
    this.cartItems.map((item) => {
      delete item.inCart;
    });
    this.cartItems = [];
    this.cartProducts.next(this.cartItems);
  }

  public getItems(): Observable<ProductDetails[]> {
    return this.cartProducts.asObservable();
  }

  private checkCart(product: ProductDetails): boolean {
    return this.cartItems.some((item) => product.id === item.id);
  }
}
