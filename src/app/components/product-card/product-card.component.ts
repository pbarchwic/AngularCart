import { Component, OnInit } from '@angular/core';
import { ProductDetails, ProductsResponse } from 'src/app/models';
import { ProductRepository } from 'src/app/repository';
import { CartService } from 'src/app/services';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  public products: ProductDetails[];
  constructor(
    private readonly cartService: CartService,
    private readonly repository: ProductRepository
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  public addToCart(product: ProductDetails): void {
    product.inCart = true;
    this.cartService.addToCart(product);
  }

  public getProducts(): void {
    this.repository.getProductDetails().subscribe(
      (response: ProductsResponse) => {
        this.products = response.products;
      },
      () => {}
    );
  }
}
