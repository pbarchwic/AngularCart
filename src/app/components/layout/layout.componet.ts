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

  ngOnInit(): void {
    this.getProducts();
  }

  public getProductDetails(): Observable<ProductsResponse> {
    return this.http
      .get<ProductsResponse>(`assets/data-mocks/products.json`)
      .pipe(map((response) => response));
  }

  public getProducts(): void {
    this.getProductDetails().subscribe(
      (response: ProductsResponse) => {
        this.products = response.products;
      },
      () => {}
    );
  }
}
