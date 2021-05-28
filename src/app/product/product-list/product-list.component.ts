import { Component, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductListComponent {

  constructor(public productService: ProductService) {
  }

}
