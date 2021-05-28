import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { ProductDeleteComponent } from './product-delete.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Product } from '../product.model';
import { Category } from '../category.enum';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ProductDeleteComponent', () => {
  let component: ProductDeleteComponent;
  let fixture: ComponentFixture<ProductDeleteComponent>;

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
      declarations: [ProductDeleteComponent],
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
    fixture = TestBed.createComponent(ProductDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component['router'], 'navigate').and.returnValue(new Promise(res => res(true)));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should load product from route data', () => {
      expect(component.product).toEqual(product);
    });
  });

  describe('delete', () => {
    it('should navigate to list after delete', fakeAsync(() => {
      spyOn(component['productService'], 'delete').and.callThrough();
      component.delete();
      expect(component['productService'].delete).toHaveBeenCalledWith(product.id);
    }));
  });

  describe('cancel', () => {
    it('should navigate to product show after cancel', () => {
      component.cancel();
      expect(component['router'].navigate).toHaveBeenCalledWith(['/', product.id]);
    });
  });
});
