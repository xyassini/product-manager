import { Component, ViewEncapsulation } from '@angular/core';
import { Product } from '../product.model';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductCreateComponent {

  constructor(private router: Router,
              private productService: ProductService) {
  }

  submit(product: Product) {
    // piped with take(1) -> no unsubscribe needed
    this.productService.create(product).subscribe(async (result) => {
      await this.router.navigate(['/', result.id]);
    });
  }

  async cancel() {
    await this.router.navigate(['/']);
  }
}
