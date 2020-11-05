import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootRoutingModule } from './root-routing.module';
import * as Components from './index';

@NgModule({
  declarations: [
    Components.RootComponent,
    Components.ToolbarComponent,
    Components.LayoutComponent,
    Components.ProductCardComponent,
  ],
  imports: [BrowserModule, RootRoutingModule],
  providers: [],
  bootstrap: [Components.RootComponent],
})
export class RootModule {}
