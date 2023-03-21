import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { registerInterface } from 'src/Models/Interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(public fb: FormBuilder, public router: Router) {
    this.loginForm = this.fb.group({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  ngOnInit(): void {
    this.getLoginData();
  }

  userLoginData: registerInterface[]=[];
  public getLoginData(): void {
    let loginData = localStorage.getItem('User_Details');
    this.userLoginData = JSON.parse(loginData!);

  }
  public userLogin(): void {
    // console.log(this.loginForm.value.userName);
    // console.log(this.loginForm.value.password);


    this.userLoginData.filter((data)=>{
      console.log(data);

      console.log(data.userName);
      console.log(data.password);

      if( data.userName === this.loginForm.value.userName && data.password === this.loginForm.value.password ){
        alert("success")
        console.log("login success");
        this.loginForm.reset()
        this.router.navigate(['dashboard'])
      }
    })

  }
}
