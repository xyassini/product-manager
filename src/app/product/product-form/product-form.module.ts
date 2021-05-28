import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from './product-form.component';
import { FormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';

@NgModule({
  declarations: [
    ProductFormComponent
  ],
  exports: [
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxCurrencyModule
  ]
})
export class ProductFormModule { }
