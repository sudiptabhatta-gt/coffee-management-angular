import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../registration/registration.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router, private toastr: ToastrService) {
  }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }


  // returning all the form control instances
  get fc() {
    return this.loginForm.controls
  }


  loginFormSubmit() {
    // console.log(this.loginForm.value)
    this.loginService.loginFormSubmitData(this.loginForm.value).subscribe(
      // next callback - when the HTTP request successfully returns a response
      (res) => {
        // console.log(res)
        if(res.data.role == 'admin'){
          localStorage.setItem('loginUserData', JSON.stringify(res.data))
          this.router.navigate(['/home'])
        } else {
          localStorage.setItem('loginUserData', JSON.stringify(res.data))
          this.router.navigate(['/user', res.data.id])
        }
      },
      // error callback -  when the HTTP Request end in an error.
      (error) => {
        this.toastr.error(error.error.error)
      }
    )
  }

}
