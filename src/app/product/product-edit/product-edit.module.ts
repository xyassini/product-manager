import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductEditRoutingModule } from './product-edit-routing.module';
import { ProductEditComponent } from './product-edit.component';
import { ProductFormModule } from '../product-form/product-form.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProductEditRoutingModule,
    ProductFormModule
  ]
})
export class ProductEditModule { }
