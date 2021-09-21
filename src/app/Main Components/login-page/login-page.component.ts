import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/models/User';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  users: User[] = [];
  validatePass: any;
  userType!: any;

  loginForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }

  //Console log first since author and approver pages are not done yet
  navigateTo(userType: string) {
    console.log(userType);
  }

  validateUser() {
    this.validatePass = this.users.find(
      (x) => x.username === this.loginForm.value.username
    )?.password;
    if (this.validatePass == this.loginForm.value.password) {
      this.userType = this.users.find(
        (x) => x.username === this.loginForm.value.username
      )?.userType;
      this.navigateTo(this.userType);
    }
  }
}
