import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDeleteComponent } from './product-delete.component';

const routes: Routes = [
  {
    path: '',
    component: ProductDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDeleteRoutingModule { }
