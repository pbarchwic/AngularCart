import { Component, OnInit } from '@angular/core';
import { ProductDetails } from 'src/app/models';
import { CartService } from 'src/app/services';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  public cartItems: ProductDetails[] = [];
  constructor(private readonly cartService: CartService) {}

  ngOnInit() {
    this.cartService.getItems().subscribe((products) => {
      this.cartItems = products;
    });
  }
}
