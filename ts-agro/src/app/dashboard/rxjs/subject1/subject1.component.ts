import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-subject1',
  templateUrl: './subject1.component.html',
  styleUrls: ['./subject1.component.scss']
})
export class Subject1Component implements OnInit{

SubName:string="Mahesh"
behaviourSubValue:string | undefined
constructor(public _dataService:DataService){}
ngOnInit(): void {
  this._dataService.SubHeadName.subscribe(res=> this.SubName=res)
// below for BehaviourSubject
this._dataService.SubHeadName2.subscribe(res=> this.behaviourSubValue=res )
}
public ChangeName(data:any){
  console.log(data.value);
  this._dataService.SubHeadName.next(data.value)
}
public ChangeNameForBehaviour(data:any){
  this._dataService.SubHeadName2.next(data.value)
}

}
