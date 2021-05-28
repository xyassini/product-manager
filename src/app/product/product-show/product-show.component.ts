import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, map } from 'rxjs/operators';
import { Product } from '../product.model';
import { capitalizeFirstLetter } from '../../utils/capitalize-first-letter';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductShowComponent implements OnInit {
  product?: Product;
  capitalizeFirstLetter = capitalizeFirstLetter;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.pipe(
      first(),
      map(data => data.product)
    ).subscribe(product => this.product = product);
  }
}
