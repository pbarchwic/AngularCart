import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductDetails, ProductsResponse, Response } from '../../models';
import { ProductRepository } from 'src/app/repository';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  public products: ProductDetails[];
  constructor(
    private readonly http: HttpClient,
    private readonly repository: ProductRepository
  ) {}

  ngOnInit(): void {
    this.getProducts();
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
