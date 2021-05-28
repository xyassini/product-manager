import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { first, map } from 'rxjs/operators';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductDeleteComponent implements OnInit {
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

  delete() {
    this.productService.delete(this.product!.id).subscribe(async () => {
      await this.router.navigate(['/']);
    });
  }

  async cancel() {
    await this.router.navigate(['/', this.product!.id]);
  }
}
