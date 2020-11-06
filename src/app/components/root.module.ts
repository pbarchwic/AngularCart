import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RootRoutingModule } from './root-routing.module';
import * as Components from './index';

@NgModule({
  declarations: [
    Components.RootComponent,
    Components.ToolbarComponent,
    Components.LayoutComponent,
    Components.ProductCardComponent,
    Components.CartComponent,
  ],
  imports: [BrowserModule, RootRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [Components.RootComponent],
})
export class RootModule {}
