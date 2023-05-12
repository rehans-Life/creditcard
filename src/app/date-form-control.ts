import { FormControl } from '@angular/forms';

// DateFormControl is going to have all the properties and methods
// that FormControl has but we are going to overwrite one of them
export class DateFormControl extends FormControl {
  // So we are coming in and manupulating the data before form control
  // stores it.
  override setValue(value: string | null, options: any) {
    // Here we are making sure we not only change the value of this
    // field within the form object but also within the DOM also with
    // this value.

    if (!value) {
      super.setValue(value, {
        ...options,
        emitModelToViewChange: true,
      });
      return;
    }

    if (value.match(/[^0-9|\/]/gi)) {
      super.setValue(this.value, {
        ...options,
        emitModelToViewChange: true,
      });
      return;
    }

    if (value.length === 3 && this.value.length === 2) {
      super.setValue(
        value.slice(0, value.length - 1) + '/' + value[value.length - 1],
        { ...options, emitModelToViewChange: true }
      );
      return;
    }

    if (value.length === 2 && this.value.length === 3) {
      super.setValue(value, { ...options, emitModelToViewChange: true });
      return;
    }

    if (value.length === 2) {
      super.setValue(value + '/', { ...options, emitModelToViewChange: true });
      return;
    }

    if (value.length > 5) {
      super.setValue(this.value, { ...options, emitModelToViewChange: true });
      return;
    }

    super.setValue(value, { ...options, emitModelToViewChange: true });
  }
}
