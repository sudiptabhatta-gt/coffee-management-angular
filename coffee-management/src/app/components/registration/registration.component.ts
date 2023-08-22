import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      "confirm-password": new FormControl('')
    })
  }

  registrationFormSubmit(){
    console.log(this.registrationForm)
    console.log(this.registrationForm.value)
  }
}
