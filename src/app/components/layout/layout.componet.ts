import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductDetails, ProductsResponse, Response } from '../../models';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.componet.html',
  styleUrls: ['./layout.componet.scss'],
})
export class LayoutComponent implements OnInit {
  public products: any;
  constructor(private readonly http: HttpClient) {}

  ngOnInit() {
    this.getProducts();
  }

  public getProductDetails() {
    return this.http
      .get(`assets/data-mocks/products.json`)
      .pipe(map((response) => response));
  }

  public getProducts() {
    this.getProductDetails().subscribe(
      (product: ProductsResponse) => {
        this.products = product.products;
        console.log(this.products);
      },
      () => {}
    );
  }
}
