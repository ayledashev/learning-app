import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  control: FormControl;
  formGroup: FormGroup;

  ngOnInit(): void {
    this.control = new FormControl('', [
      Validators.required,
      Validators.maxLength(6),
    ]);
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(12),
      ]),
      c: this.control,
    });
    this.formGroup.patchValue({
      email: 'почта',
      password: 'пароль',
    });
  }
  log() {
    console.log(this.control.valid, this.control.value);
    console.log(
      this.formGroup.valid,
      this.formGroup.get('c'),
      this.formGroup.getRawValue()
    );
    this.control.setValue('dhjgfsd');
    this.formGroup.setValue({
      email: 'почта1',
      password: 'пароль1',
      c: 'eee'
    });
  }
}
