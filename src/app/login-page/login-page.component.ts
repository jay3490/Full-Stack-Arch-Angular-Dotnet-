import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor(private router: Router, private loginAuth: AuthService) { }

  ngOnInit(): void {


  }
  isUserValid: boolean = false;
  type: string = "password";
  eyeIcon: string = "fa-eye-slash";
  isText: boolean = false;

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";

  }
  loginSubmitted() {

    if (this.loginForm.valid) {
      this.loginAuth.loginUser(this.loginForm.value)
        .subscribe({
          next: (res) => {
            // alert(res.message);
            this.loginForm.reset();
            this.loginAuth.storeToken(res.token)
            this.router.navigate(['dashboard'])
          },
          error: (err) => {
            alert(err?.error.message)
          }
        })
    }
  }


  loginForm = new FormGroup({
    EmailId: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(6)])
  });

  get Email(): FormControl {
    return this.loginForm.get('EmailId') as FormControl;
  }

  get PWD(): FormControl {
    return this.loginForm.get('Password') as FormControl;
  }

}

