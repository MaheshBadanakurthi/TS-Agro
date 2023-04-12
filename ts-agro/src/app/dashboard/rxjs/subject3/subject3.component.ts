import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-subject3',
  templateUrl: './subject3.component.html',
  styleUrls: ['./subject3.component.scss']
})
export class Subject3Component implements OnInit{
  SubName:string="Sreja"
  behaviourSubNmae!:string
  constructor(public _dataService:DataService){}
  ngOnInit(): void {
    this._dataService.SubHeadName.subscribe(res=> this.SubName=res)
    // behaviourSubNmae value
    this._dataService.SubHeadName2.subscribe(res=> this.behaviourSubNmae=res)
  }
  public changeValue(res:any){
    this._dataService.SubHeadName.next(res.value)
  }
  public changeValueForBehaviour(data:any){
    this._dataService.SubHeadName2.next(data.value)
  }

}
