import {NgModule} from '@angular/core'
import { Routes ,RouterModule} from '@angular/router'
import { CultivateLandComponent } from './cultivate-land/cultivate-land.component'
import { DashboardComponent } from './dashboard.component'
import { InfoComponent } from './info/info.component'
import { RxjsComponent } from './rxjs/rxjs.component'
import { FormComponent } from './form/form.component'

const routes:Routes=[
  {
    path:'',component:DashboardComponent,
    children:[
      {
        path:'', component:InfoComponent
      },
      {
        path:'cultivateLand', component:CultivateLandComponent
      },
      {
        path:'rxjs', component:RxjsComponent
      },
      {
        path:'formTask', component:FormComponent
      }
    ]
  }
]

@NgModule({
  exports:[
    RouterModule
  ],
  imports:[
    RouterModule.forChild(routes)
  ]
})
export class DashboardRoutingModule {}
