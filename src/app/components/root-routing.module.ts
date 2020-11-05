import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as Components from './index';
const routes: Routes = [
  { path: '', component: Components.LayoutComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RootRoutingModule {}
