import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard.routing.moule';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { BrowserModule } from '@angular/platform-browser';
import { InfoComponent } from './info/info.component';
import { DashboardComponent } from './dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TabViewModule} from 'primeng/tabview';
import { ChartModule } from 'primeng/chart';
import {KnobModule} from 'primeng/knob';
import { HttpClientModule} from '@angular/common/http'
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CultivateLandComponent } from './cultivate-land/cultivate-land.component';
import { DialogModule } from 'primeng/dialog';
import {TooltipModule } from 'primeng/tooltip';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { RxjsComponent } from './rxjs/rxjs.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { HeaderComponent } from './header/header.component';
import { Subject1Component } from './rxjs/subject1/subject1.component';
import { Subject2Component } from './rxjs/subject2/subject2.component';
import { Subject3Component } from './rxjs/subject3/subject3.component';
import { FormComponent } from './form/form.component';
import { CheckboxModule } from 'primeng/checkbox';
import { MultiSelectModule } from 'primeng/multiselect';


@NgModule({
  declarations: [InfoComponent, DashboardComponent,CultivateLandComponent, RxjsComponent, HeaderComponent, Subject1Component, Subject2Component, Subject3Component, FormComponent],
  exports: [],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    OverlayPanelModule,
    FormsModule,
    TabViewModule,
    ChartModule,
    KnobModule,
    HttpClientModule,
    DividerModule,
    ButtonModule,
    TableModule,
    DialogModule,
    TooltipModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiaGJoamhzIiwiYSI6ImNsNWo3ZGNhODBmODAzY3BqODhuejB3ZmoifQ.RqsEoPXFgDUq1mryoReotg'
    }),
    DropdownModule,
    InputTextModule,
    ReactiveFormsModule,
    CheckboxModule,
    MultiSelectModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class DashboardModule {}
