import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { concatMap, take, tap } from 'rxjs/operators';
import { Category } from './category.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([
    new Product({
      id: '2348R7-R3423',
      name: 'Sportschuh',
      manufacturer: 'Nike',
      categories: [
        Category.SPORT,
        Category.SHOES,
        Category.RUNNING
      ],
      priceCents: 8000,
      description: 'Laufschuh\nObermaterial: Kunststoff/Textil\nInnenmaterial: Synthetik\nSohle: Abriebfester Gummi\nSportart: Laufen\nVerschluss: Schnürung\nFarbe: Rot\nAußensohle: Flexibel\nInnensohle: Gepolstert',
      imageUrl: 'assets/sneakers.jpg'
    }),

    new Product({
      id: '8PP432-DD342',
      name: 'Kopfhörer',
      manufacturer: 'NewComp',
      categories: [
        Category.HEADSET,
        Category.BLUETOOTH
      ],
      priceCents: 4000,
      onSale: true,
      description: 'Bluetooth Kopfhörer\nBauform: Over Ear\nMaterial: Kunststoff\nAkku-Laufzeit: 30h\nFarbe: Schwarz\nGewicht: 250g',
      imageUrl: 'assets/headphone.jpg'
    }),

    new Product({
      id: '67PT5W-E12TT',
      name: 'Uhr',
      manufacturer: 'SportsInc',
      categories: [
        Category.SPORT,
        Category.WATCH
      ],
      priceCents: 11000,
      description: 'Smartwatch\nMaterial: Kunststoff\nAkku-Laufzeit: bis zu 7 Tage\nFarbe: Weiss\nGewicht: 77g\nSonstiges:\nwasserdicht, Sicherheitsglas',
      imageUrl: 'assets/watch.jpg'
    })
  ]);

  constructor() {
  }

  create(product: Product): Observable<Product> {
    const product$ = of(product).pipe(take(1));
    return this.products$.pipe(
      take(1),
      tap(products => {
        products.push(product);
        this.products$.next(products);
      }),
      concatMap(() => product$)
    );
  }
}
