import { Category } from './category.enum';

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
    // Not necessary since it can be caught with form + ts validation
    // though a good example on how to handle optional/default values in a class model
    this.categories = v.categories ?? [];
    this.description = v.description ?? '';
    this.onSale = v.onSale ?? false;
  }

  get price(): number {
    return this.priceCents / 100;
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
