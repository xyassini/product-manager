import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { ProductService } from './product.service';
import { Product } from './product.model';
import { catchError, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Product> {
  constructor(private productService: ProductService,
              private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    return this.productService.get(route.params.id).pipe(
      first(),
      catchError((error) => {
        this.router.navigate(['/']);
        return throwError(error);
      })
    );
  }
}
