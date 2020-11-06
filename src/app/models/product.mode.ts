export interface ProductDetails {
  name: string;
  image: string;
  price: number;
  discount: number;
  owned: boolean;
  inCart: boolean;
}

export interface ProductsResponse {
  products: ProductDetails[];
}

export interface Response<T> {
  result: T;
}
