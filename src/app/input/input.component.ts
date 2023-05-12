import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() field: FormControl;
  @Input() label: string;

  showErrors() {
    const { dirty, errors, touched } = this.field;
    return dirty && errors && touched;
  }
}
