import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { ProductEditComponent } from './product-edit.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Product } from '../product.model';
import { Category } from '../category.enum';

describe('ProductEditComponent', () => {
  let component: ProductEditComponent;
  let fixture: ComponentFixture<ProductEditComponent>;

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
    await TestBed.configureTestingModule({
      declarations: [ProductEditComponent],
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
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
    fixture = TestBed.createComponent(ProductEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(component['router'], 'navigate').and.returnValue(new Promise(res => res(true)));
  });

  describe('ngOnInit', () => {
    it('should load product from route data', () => {
      expect(component.product).toEqual(product);
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('cancel', () => {
    it('should navigate to product show after cancel', () => {
      component.cancel();
      expect(component['router'].navigate).toHaveBeenCalledWith(['/', product.id]);
    });
  });

  describe('submit', () => {
    it('should navigate to product show after submit', fakeAsync(() => {
      spyOn(component['productService'], 'update').and.callThrough();
      component.submit(product);
      expect(component['productService'].update).toHaveBeenCalledWith(product.id, product);
      fixture.whenStable().then(() => {
        expect(component['router'].navigate).toHaveBeenCalledWith(['/', product.id]);
      })
    }));
  });
});
