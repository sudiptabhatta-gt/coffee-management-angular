import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: any;

  constructor() { }

  ngOnInit(): void {

    this.registrationForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      "confirm-password": new FormControl('', Validators.required)
    })
  }


  get Username() {
    return this.registrationForm.get('username')
  }

  get Email() {
    return this.registrationForm.get('email')
  }

  get Password() {
    return this.registrationForm.get('password')
  }

  get ConfirmPassword() {
    return this.registrationForm.get('confirm-password')
  }

  registrationFormSubmit(){
    console.log(this.registrationForm)
    console.log(this.registrationForm.value)
  }
}
