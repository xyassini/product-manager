import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { ProductCreateComponent } from './product-create.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Product } from '../product.model';
import { Category } from '../category.enum';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ProductCreateComponent', () => {
  let component: ProductCreateComponent;
  let fixture: ComponentFixture<ProductCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCreateComponent],
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(component['router'], 'navigate').and.returnValue(new Promise(res => res(true)));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('submit', () => {
    it('should navigate after create', fakeAsync(() => {
      const product = new Product({
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
      });

      spyOn(component['productService'], 'create').and.callThrough();
      component.submit(product);
      expect(component['productService'].create).toHaveBeenCalledWith(product);
      fixture.whenStable().then(() => {
        expect(component['router'].navigate).toHaveBeenCalledWith(['/', product.id]);
      });
    }));
  });

  describe('cancel', () => {
    it('should navigate to list on cancel', () => {
      component.cancel();
      expect(component['router'].navigate).toHaveBeenCalledWith(['/']);
    });
  });
});
