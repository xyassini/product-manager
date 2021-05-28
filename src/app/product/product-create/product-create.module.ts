import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCreateRoutingModule } from './product-create-routing.module';
import { ProductCreateComponent } from './product-create.component';
import { FormsModule } from '@angular/forms';
import { ProductFormModule } from '../product-form/product-form.module';


@NgModule({
  declarations: [
    ProductCreateComponent
  ],
  imports: [
    CommonModule,
    ProductCreateRoutingModule,
    FormsModule,
    ProductFormModule
  ]
})
export class ProductCreateModule { }
