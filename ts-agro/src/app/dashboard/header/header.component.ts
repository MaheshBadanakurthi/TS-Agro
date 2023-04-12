import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  implements OnInit{
  mbShow:boolean=false;
  constructor(public _dataSer:DataService){}
  ngOnInit(): void {
    this._dataSer.mB.subscribe(res=> this.mbShow=res)
  }
}
