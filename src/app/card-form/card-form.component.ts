import { Component } from '@angular/core';

// By using them we can define our form like all the different
// fields that are going to exists inside of it and the rules
// for the fields
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateFormControl } from '../date-form-control';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent {
  // So as I create an instance of the FormGroup I have to pass
  // in all the different fields that are going to exists inside
  // of my form.

  // Then for each field i have to create an instance of the
  // FormControl in it i pass the initial value of the field
  // and its going to keep track of this fields name through
  // the input.
  cardForm = new FormGroup({
    // Make sure the field is filled
    name: new FormControl('', [Validators.minLength(3), Validators.required]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.maxLength(16),
      Validators.minLength(16),
    ]),
    expiration: new DateFormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
    ]),
    securityCode: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
    ]),
  });

  constructor() {}

  onSubmit() {
    console.log('Submitting Form');
  }

  onResetClick() {
    this.cardForm.reset();
  }
}
