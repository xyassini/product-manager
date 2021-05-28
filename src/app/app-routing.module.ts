import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductResolver } from './product/product.resolver';

// Lazy loading the first loaded component results in a longer initial loading time
// I've decided to lazy load the create route to show off lazy loading
// Usually I don't lazy load simple components, but entire entities
const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'create',
    loadChildren: () => import('./product/product-create/product-create.module').then(m => m.ProductCreateModule)
  },
  {
    path: ':id',
    resolve: {
      product: ProductResolver
    },
    loadChildren: () => import('./product/product-show/product-show.module').then(m => m.ProductShowModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
