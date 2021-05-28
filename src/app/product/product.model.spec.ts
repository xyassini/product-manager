import { Product } from './product.model';
import { Category } from './category.enum';

describe('ProductModel', () => {
  let product: Product;

  beforeEach(() => {
    product = new Product({
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
  });

  it('should be created', () => {
    expect(product).toBeTruthy();
  });

  describe('price', () => {
    it('should return correct value', () => {
      expect(product.price).toEqual(110.0);
    });

    it('should set correct value', () => {
      product.price = 80;
      expect(product.priceCents).toEqual(8000);
    });
  });

  describe('capitalizedCategories', () => {
    it('should return correct value', () => {
      expect(product.capitalizedCategories).toEqual(['Sport', 'Watch']);
    });
  });

  describe('toggleCategory', () => {
    it('should delete existing category', () => {
      product.toggleCategory(Category.WATCH);
      expect(product.categories).toEqual([Category.SPORT]);
    });

    it('should add category', () => {
      product.toggleCategory(Category.SHOES);
      expect(product.categories).toEqual([Category.SPORT, Category.WATCH, Category.SHOES]);
    });
  });
});
