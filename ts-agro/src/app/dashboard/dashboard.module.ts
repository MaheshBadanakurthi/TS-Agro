import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard.routing.moule';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { BrowserModule } from '@angular/platform-browser';
import { InfoComponent } from './info/info.component';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [InfoComponent, DashboardComponent,CultivateLandComponent],
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
    TooltipModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class DashboardModule {}
