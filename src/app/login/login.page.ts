import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
// tslint:disable-next-line:component-class-suffix
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  auth() {
    this.router.navigate(['/home']);
  }
}
