import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductShowRoutingModule } from './product-show-routing.module';
import { ProductShowComponent } from './product-show.component';


@NgModule({
  declarations: [
    ProductShowComponent
  ],
  imports: [
    CommonModule,
    ProductShowRoutingModule
  ]
})
export class ProductShowModule { }
