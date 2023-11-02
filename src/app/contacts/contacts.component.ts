import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
control: FormControl;

  ngOnInit(): void {
    this.control = new FormControl("", [Validators.required, Validators.maxLength(6)]);
  }
  log() {
console.log(this.control.valid, this.control.value);
this.control.setValue('dhjgfsd');
  }
}

