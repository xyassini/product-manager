import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import { Product } from './product.model';
import { Category } from './category.enum';
import { productsFixture } from './fixtures/products.fixture';
import { concatMap } from 'rxjs/operators';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('create', () => {
    it('should add new product to observable', (done) => {
      const newProduct = new Product({
        id: '123qwe',
        name: 'Test Product',
        manufacturer: 'Test LLC',
        categories: [Category.WATCH],
        priceCents: 5000,
        onSale: true,
        description: 'Example Description'
      });
      service.create(newProduct).pipe(
        concatMap(() => service.products$)
      ).subscribe(products => {
        expect(products.length).toEqual(4);
        expect(products).toEqual([...productsFixture, newProduct]);
        done();
      });
    });
  });

  describe('update', () => {
    it('should update product correctly', (done) => {
      service.update('2348R7-R3423', { name: 'Test' }).subscribe(product => {
        expect(service.products$.value[0].name).toEqual('Test');
        expect(product.name).toEqual('Test');
        done();
      });
    });
  });

  describe('get', () => {
    it('returns product with id 8PP432-DD342', (done) => {
      service.get('8PP432-DD342').subscribe(product => {
        expect(product).toEqual(service.products$.value[1]);
        done();
      });
    });

    it('should throw error if product doesn\'t exist', (done) => {
      service.get('random').subscribe(() => ({}), err => {
        expect(err).toBeTruthy();
        done();
      });
    });
  });

  describe('delete', () => {
    it('should delete product correctly', (done) => {
      service.delete('2348R7-R3423').subscribe(products => {
        expect(service.products$.value.length).toEqual(2);
        expect(products.length).toEqual(2);
        done();
      });
    });
  });
});
