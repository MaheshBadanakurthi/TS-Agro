import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [InfoComponent, DashboardComponent],
  exports: [],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    OverlayPanelModule,
    FormsModule,
    TabViewModule,
    ChartModule,
    KnobModule,
    HttpClientModule
  ],
})
export class DashboardModule {}
