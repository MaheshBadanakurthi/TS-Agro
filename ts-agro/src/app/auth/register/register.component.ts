import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { registerInterface } from 'src/Models/Interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  register!: FormGroup;
  constructor(public fb: FormBuilder, public router:Router) {
    this.register = this.fb.group({
      userName: new FormControl('', [
        Validators.required,
      ]),
      mobile: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl('',[Validators.required]),
    });
  }
  ngOnInit(): void {}
  public userName!: string;
  public mobile!: number;
  public email!: string;
  public password!: string;
  registerUsers: registerInterface[] = [];
  registeredUserObj!: registerInterface;
  public userRegister(): void {
    console.log(this.register);
    this.registeredUserObj = {
      email: this.register.value.email,
      mobile: this.register.value.mobile,
      userName: this.register.value.userName,
      password: this.register.value.password,
    };
    console.log(this.registeredUserObj);

    this.registerUsers.push(this.registeredUserObj);
    localStorage.setItem('User_Details', JSON.stringify(this.registerUsers))

    this.register.reset();
    this.router.navigate(['auth'])
  }
}
