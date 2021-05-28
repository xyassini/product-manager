import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductFormComponent } from './product-form.component';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ProductFormComponent', () => {
  let component: ProductFormComponent;
  let fixture: ComponentFixture<ProductFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductFormComponent],
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO!!!
  xdescribe('validateImageUrl', () => {
    it('should should set errors to null for valid url', () => {
      spyOn(component.imageUrlInput.control, 'setErrors').and.callThrough();
      component.validateImageUrl();
      expect(component.imageUrlInput.control.setErrors).toHaveBeenCalledOnceWith(null);
    });
  });

  describe('onSubmit', () => {
    it('should emit submit if inputs are valid', () => {
      spyOn(component.form.form, 'markAllAsTouched').and.callThrough();
      spyOn(component.formSubmit, 'emit').and.callThrough();
      spyOnProperty(component.form, 'valid', 'get').and.callFake(() => true);
      component.onSubmit();
      fixture.detectChanges();
      expect(component.form.form.markAllAsTouched).toHaveBeenCalledTimes(1);
      expect(component.formSubmit.emit).toHaveBeenCalledWith(component.product);
    });

    it('should not emit submit if inputs are invalid', () => {
      spyOn(component.form.form, 'markAllAsTouched').and.callThrough();
      spyOn(component.formSubmit, 'emit').and.callThrough();
      spyOnProperty(component.form, 'valid', 'get').and.callFake(() => false);
      component.onSubmit();
      fixture.detectChanges();
      expect(component.form.form.markAllAsTouched).toHaveBeenCalledTimes(1);
      expect(component.formSubmit.emit).not.toHaveBeenCalledWith(component.product);
    });
  });
});
