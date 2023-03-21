import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  visibleSidebar:boolean=false;
  step:number=0

  constructor(){}

  ngOnInit(): void {

  }
  public logout():void{

  }

}
