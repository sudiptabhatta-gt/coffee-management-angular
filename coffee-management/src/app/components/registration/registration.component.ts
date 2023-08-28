import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordMatch } from '../../validators/passwordMatch'
import { RegistrationService } from '../../service/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: any;

  constructor(fb: FormBuilder, private registrationService: RegistrationService) { 
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
    // console.log(this.registrationForm)
    // console.log(this.registrationForm.value)

    // call the registrationFormSubmitData method and subscribe to the returned observable to actually send the Http post request to the server
    this.registrationService.registrationFormSubmitData(this.registrationForm.value).subscribe(res => {
      console.log(res)
    })
  }
}
