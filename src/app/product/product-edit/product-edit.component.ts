import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { first, map } from 'rxjs/operators';
import { ProductService } from '../product.service';
import { async } from 'rxjs';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductEditComponent implements OnInit {
  product?: Product;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.data.pipe(
      first(),
      map(data => data.product)
    ).subscribe(product => this.product = product);
  }

  async cancel() {
    await this.router.navigate(['/', this.product!.id]);
  }

  submit(product: Product) {
    this.productService.update(product.id, product).subscribe(async (updatedProduct) => {
      await this.router.navigate(['/', updatedProduct!.id]);
    });
  }
}
