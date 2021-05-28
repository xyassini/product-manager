import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
