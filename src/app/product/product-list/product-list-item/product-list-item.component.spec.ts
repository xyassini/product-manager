import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListItemComponent } from './product-list-item.component';
import { Category } from '../../category.enum';
import { Product } from '../../product.model';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ProductListItemComponent', () => {
  let component: ProductListItemComponent;
  let fixture: ComponentFixture<ProductListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListItemComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListItemComponent);
    component = fixture.componentInstance;

    component.product = new Product({
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

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
