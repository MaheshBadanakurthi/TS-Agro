import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-subject2',
  templateUrl: './subject2.component.html',
  styleUrls: ['./subject2.component.scss'],
})
export class Subject2Component implements OnInit {
  SubName: string = 'Raghu';
  behaviourSubValue!: string;
  constructor(public _dataService: DataService) {}
  ngOnInit(): void {
    this._dataService.SubHeadName.subscribe((res) => (this.SubName = res));
    // behaviourSubValue
    this._dataService.SubHeadName2.subscribe(res=> this.behaviourSubValue=res)
  }
  public ChangeName(data: any) {
    this._dataService.SubHeadName.next(data.value);
  }
  public ChangeNameForBehaviour(data: any) {
    this._dataService.SubHeadName2.next(data.value);
  }
}
