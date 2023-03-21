import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './auhentication.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children:[
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: '**',
        component: LoginComponent,
      },

    ]
  },
  // {
  //   path: 'register',
  //   component: RegisterComponent,
  // },
  // {
  //   path: '**',
  //   component: LoginComponent,
  // },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
