import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDeleteRoutingModule } from './product-delete-routing.module';
import { ProductDeleteComponent } from './product-delete.component';


@NgModule({
  declarations: [
    ProductDeleteComponent
  ],
  imports: [
    CommonModule,
    ProductDeleteRoutingModule
  ]
})
export class ProductDeleteModule { }
