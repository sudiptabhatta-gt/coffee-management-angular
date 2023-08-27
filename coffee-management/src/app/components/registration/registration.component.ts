import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordMatch } from '../../validators/passwordMatch'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: any;

  constructor(fb: FormBuilder) { 
    this.registrationForm = fb.group({
      username: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)
      ]],
      confirmPassword: ['', [
        Validators.required,
      ]]
    },
    { 
      validator: passwordMatch('password', 'confirmPassword')
    }
    )
  }


  ngOnInit(): void {

  }

  
  // returning all the form control instances
  get fc(){
    return this.registrationForm.controls 
  }

  registrationFormSubmit(){
    console.log(this.registrationForm)
    console.log(this.registrationForm.value)
  }
}
