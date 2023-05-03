import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public fullName!: string | null | undefined;
  public password!: string | null | undefined;
  user = { fullName: '', password: '' };

  constructor(private ds: DataserviceService, private router: Router) {}
  ngOnInit(): void {}

  loginForm = new FormGroup({
    fullName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    console.log("flow 3 - after the user submits or clicks the button in login.component.ts");
    // console.table(this.loginForm.value);
    this.fullName = this.loginForm.get('fullName')?.value;
    this.password = this.loginForm.get('password')?.value;
    // The error message Type 'string | null | undefined' is not assignable to type 'string'. Type 'undefined' is not assignable to type 'string'. is a TypeScript error that occurs when you try to assign a value of type string | null | undefined to a variable of type string1.
    // In your code, the error is caused by the line this.user = {fullName: this.fullName, password: this.password};
    //  The error message suggests that the value of this.fullName or this.password might be null or undefined1.
    // This will only assign the value if both this.fullName and this.password are not null or undefined.
    if (this.fullName && this.password) {
      this.user = { fullName: this.fullName, password: this.password };
    }
    console.log("flow 4 - from loigin.component.ts after getting the data from the user " + " " + this.user);

    this.ds.checkLogin(this.user).subscribe({
      next: (data) => {
        console.log("inside the checkLogin() function in login.component.ts " + " " + data);
        if (data) {
          alert('Login successful!');
          sessionStorage.setItem('user', this.user.fullName);
          this.router.navigate(['/quizes']);
        }
      },
    });

    //   if (this.fullName == 'vishnu' && this.password == '12345') {
    //     this.router.navigate(['/quizes']);
    //   } else {
    //     console.log('error');
    //   }
    // }
  }
}
