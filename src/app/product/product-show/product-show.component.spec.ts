import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShowComponent } from './product-show.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Product } from '../product.model';
import { Category } from '../category.enum';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';

describe('ProductShowComponent', () => {
  let component: ProductShowComponent;
  let fixture: ComponentFixture<ProductShowComponent>;

  const product = new Product({
    id: '67PT5W-E12TT',
    name: 'Uhr',
    manufacturer: 'SportsInc',
    categories: [
      Category.SPORT,
      Category.WATCH
    ],
    priceCents: 11000,
    description: `Smartwatch\nMaterial: Kunststoff\nAkku-Laufzeit: bis zu 7 Tage\nFarbe: Weiss\nGewicht: 77g\nSonstiges:\nwasserdicht, Sicherheitsglas`,
    imageUrl: 'assets/watch.jpg'
  });

  beforeEach(async () => {
    registerLocaleData(localeDe);
    await TestBed.configureTestingModule({
      declarations: [ProductShowComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({ product })
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductShowComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should load product from route data', () => {
      expect(component.product).toBeUndefined();
      fixture.detectChanges();
      expect(component.product).toEqual(product);
    });
  });
});
