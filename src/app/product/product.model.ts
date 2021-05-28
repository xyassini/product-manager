import { Category } from './category.enum';
import { capitalizeFirstLetter } from '../utils/capitalize-first-letter';

// Since I am not using any store to query data
// I thought using a class as a model is a better approach
// as I can query data with instance methods
export class Product {
  id!: string;
  name!: string;
  manufacturer!: string;
  categories!: Category[];
  priceCents!: number;
  onSale!: boolean;
  // This comes with problems when scaling since we may need translations.
  // Also, the whole class could be abstracted so every
  // product type would be extended by the abstract product class,
  // so it has its own props (color, battery durability, inside material etc.)
  // However, I think this solution is better in this case since its easier to introduce new products
  description!: string;
  imageUrl?: string;

  constructor(v: Product | Partial<Product> = {}) {
    Object.assign(this, v);
    this.id = v.id ?? Math.random().toString(36).substring(7);
    // Not necessary since it can be caught with form + ts validation
    // though a good example on how to handle optional/default values in a class model
    this.categories = v.categories ?? [];
    this.description = v.description ?? '';
    this.onSale = v.onSale ?? false;
    this.priceCents = v.priceCents ?? 0;
    this.imageUrl = v.imageUrl ?? 'https://images.unsplash.com/photo-1614469723922-c043ad9fd036?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1568&q=80';
  }

  // using getter methods is resource intensive,
  // since Angular's Change Detection triggers the
  // computation on every cycle
  get price(): number {
    return this.priceCents / 100;
  }

  // using getter methods is resource intensive,
  // since Angular's Change Detection triggers the
  // computation on every cycle
  set price(value: number) {
    this.priceCents = value * 100;
  }

  // returns the categories array as capitalized strings
  get capitalizedCategories(): string[] {
    return this.categories.map(category => capitalizeFirstLetter(category));
  }

  // Checks if category is already added, removes it if so
  // otherwise, it adds given category to the categories array
  toggleCategory(category: Category): void {
    const categoryIndex = this.categories.indexOf(category);
    if (categoryIndex !== -1) {
      this.categories.splice(categoryIndex, 1);
    } else {
      this.categories.push(category);
    }
  }
}
