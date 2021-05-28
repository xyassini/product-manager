import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDeleteRoutingModule } from './product-delete-routing.module';
import { ProductDeleteComponent } from './product-delete.component';
import { ProductListItemModule } from '../product-list/product-list-item/product-list-item.module';


@NgModule({
  declarations: [
    ProductDeleteComponent
  ],
  imports: [
    CommonModule,
    ProductDeleteRoutingModule,
    ProductListItemModule
  ]
})
export class ProductDeleteModule { }
