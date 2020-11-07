import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ProductsResponse } from '../models';

@Injectable()
export class ProductRepository {
  constructor(private readonly http: HttpClient) {}

  public getProductDetails(): Observable<ProductsResponse> {
    return this.http
      .get<ProductsResponse>(`assets/data-mocks/products.json`)
      .pipe(map((response) => response));
  }
}
