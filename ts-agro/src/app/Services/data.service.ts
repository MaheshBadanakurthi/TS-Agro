import { Injectable } from '@angular/core';
import { Subject,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


// TO show MB name only when it is in dashboard. Using Subjects.
  mB= new Subject<boolean>()
  SubHeadName = new Subject<string>()
  // Below one is behaviourSubject, In behaviourSubjevct we first define  default value for all
  SubHeadName2 = new BehaviorSubject<string>("Mahesh")

}
