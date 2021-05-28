import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductShowComponent } from './product-show.component';


// Edit and delete routes could be moved to AppRoutingModule
// since these routes are also accessible from ProductListComponent,
// which is loaded in the AppModule.
// e.g.: click on edit in ProductList -> Lazy-Load ProductShowModule -> Lazy-Load ProductEditModule
// instead of click on edit -> Lazy-Load ProductEditModule
const routes: Routes = [
  {
    path: '',
    component: ProductShowComponent
  },
  {
    path: 'edit',
    loadChildren: () => import('../product-edit/product-edit.module').then(m => m.ProductEditModule)
  },
  {
    path: 'delete',
    loadChildren: () => import('../product-delete/product-delete.module').then(m => m.ProductDeleteModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductShowRoutingModule { }
