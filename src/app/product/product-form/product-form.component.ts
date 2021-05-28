import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { Product } from '../product.model';
import { Category } from '../category.enum';
import { capitalizeFirstLetter } from '../../utils/capitalize-first-letter';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush // reduce capitalizeFirstLetter calls
})
export class ProductFormComponent {
  @ViewChild('form') form!: NgForm;
  @ViewChild('imageUrl') imageUrlInput!: NgModel;

  @Input() product = new Product();
  @Output() productChange = new EventEmitter<Product>();
  @Output() formCancel = new EventEmitter<void>();
  @Output() formSubmit = new EventEmitter<Product>();

  categories = Object.values(Category);
  // Not a best practice because CD calls it on every cycle,
  // normally, this would be done on ngOnInit
  // Also makes the code less readable
  capitalizeFirstLetter = capitalizeFirstLetter;

  constructor() {
  }

  validateImageUrl(): void {
    // regex taken from https://stackoverflow.com/a/8218223/6106978
    // it's not perfect though!
    const urlRegex = /https:\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
    const errors = this.imageUrlInput.value.match(urlRegex) ? null : { invalidUrl: true };
    this.imageUrlInput.control.setErrors(errors);
  }

  onSubmit() {
    this.form.form.markAllAsTouched();
    if (this.form.valid) {
      this.formSubmit.emit(this.product);
    }
  }
}
