import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/models/User';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  users: User[] = [];
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
  navigateTo(user: User) {
    console.log(user.userType);
  }

  validateUser() {
    let user: User | undefined;
    user = this.users.find((x) => x.username === this.loginForm.value.username);
    if (!user) {
      alert('Username does not exist.');
      return;
    }
    if (user.password == this.loginForm.value.password) {
      this.navigateTo(user);
    } else {
      alert('Password is incorrect.');
    }
  }
}
