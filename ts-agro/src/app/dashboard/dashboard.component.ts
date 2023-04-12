import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  visibleSidebar: boolean = false;
  step: number = 0;
  mbShow: boolean = true;
  constructor(public _dataService: DataService) {}


  ngOnInit(): void {
    this._dataService.mB.next(true)
  }
  ngOnDestroy(): void {
    this._dataService.mB.next(false)
  }
  public logout(): void {}
}
