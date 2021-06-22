import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  AsyncValidatorFn,
} from '@angular/forms';
import { isDevMode } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  contactFormArray: any;
  contacts: any;
  isDevMode: boolean;
  formVisiblity: boolean;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.contactFormArray = this.formBuilder.array([this.createContactForm()]);
    this.contacts = [];
    this.formVisiblity = true;
    this.isDevMode = isDevMode();
  }

  customEmailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (!value) {
        return null;
      }

      const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(value);

      return !pattern ? { email: true } : null;
    };
  }

  customEmailValidatorAsync(): AsyncValidatorFn {
    return async (control: AbstractControl) => {
      const value = control.value;

      if (!value) {
        return null;
      }

      const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(value);

      return !pattern ? { email: true } : null;
    };
  }

  consoleLog() {
    console.log(this.contactFormArray);
    console.log(JSON.stringify(this.contacts, null, 4));
  }
  createContactForm() {
    return this.formBuilder.group({
      firstName: new FormControl('VIGNESH', [Validators.required]),
      lastName: new FormControl('JANARTHANAN', [Validators.required]),
      email: new FormControl('vignesh@programmer.net', {
        validators: [Validators.required, this.customEmailValidator()],
        asyncValidators: [],
      }),
    });
  }

  ngOnInit(): void {}

  handleFormsVisibility() {
    this.formVisiblity = !this.formVisiblity;
  }

  addNewContactForm() {
    this.formVisiblity = true;
    this.contactFormArray.push(this.createContactForm());
  }

  removeAllContactForms() {
    this.contactFormArray = this.formBuilder.array([]);
    this.contacts = [];
  }

  deleteContactForm(index: number) {
    this.contactFormArray.removeAt(index);
  }

  saveContact(index: number) {
    if (!this.contacts.includes(this.contactFormArray.value[index]))
      this.contacts = [...this.contacts, this.contactFormArray.value[index]];
  }

  updateContact(index: number) {
    this.contacts[index] = this.contactFormArray.value[index];
  }

  saveContacts() {
    this.contacts = [...this.contactFormArray.value];
  }

  deleteContact(index: any) {
    this.contacts.splice(index, 1);
  }
}
