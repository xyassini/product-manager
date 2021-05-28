import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductListItemComponent implements OnInit {
  @Input() product!: Product;
  // Set this to false to hide show/edit/delete buttons
  @Input() withControls = true;

  constructor() { }

  ngOnInit(): void {
  }

}
