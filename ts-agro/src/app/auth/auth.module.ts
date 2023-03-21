import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth.routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ButtonModule} from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthenticationComponent } from './auhentication.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent,
    AuthenticationComponent

  ],
  imports: [
    AuthRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ],
})
export class AuthModule {}
