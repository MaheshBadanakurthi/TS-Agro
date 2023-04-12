import { Component, OnInit } from '@angular/core';
import {
  Observable,
  distinct,
  from,
  of,
  Subject,
  debounceTime,
  takeLast,
  map,
  filter,
  first,
  take,
  max,
  min,
  count,
  skip,
  elementAt,
  catchError,
  pluck,
  distinctUntilChanged,
  interval,
  bufferTime,
  bufferCount,
} from 'rxjs';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DataService } from 'src/app/Services/data.service';

interface Options {
  option: string;
}

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent implements OnInit {
  nameList = [
    'Mahesh',
    'Mahesh',
    'Ajay',
    'Nagaraj',
    'Priya',
    'Ajay',
    'Nagaraj',
    'Priya',
    'Shasha',
    'Samantha',
    'Mahendhar',
  ];
  names$: Observable<string> = from(this.nameList);
  namesOf$: Observable<string> = from(this.nameList);
  namesDistinct$: Observable<string[]> = of(this.nameList);
  numArr$: Observable<number> = from([2123, 51, 5312, 351, 54, 1223, 351]);
  namesArrData: any;
  namesOfData: any;
  distinctNames: any;
  numArr: any;
  sampleSub = new Subject();
  observable = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
    subscriber.error('We are getting some erro');
  });

  // dropdownOptions!: Options[];
  selectOption!: Options[];

  value: string | undefined;
  // Below is for Subject
  SubName: string = 'Mahesh';
  constructor(public fb: FormBuilder, public _dataService:DataService) {
    this.taskForm = this.fb.group({
      levels: new FormControl('', [Validators.required]),
      states: new FormControl(''),
    });
    this.options = [
      { option: 'Level1' },
      { option: 'Level2' },
      { option: 'Level3' },
      { option: 'Level4' },
      { option: 'Level5' },
    ];
  }
  ngOnInit(): void {
    this.creationFrom();
    this.Obs();
    this.buffer();
    this._dataService.SubHeadName.subscribe(res=>{
      this.SubName = res
    })
  }

  options!: Options[];
  taskForm!: FormGroup;


  stateValue: string | undefined;
  public dropdownValue(e: any) {
    console.log(e.value.option);
    console.log(this.taskForm);
    console.log('form valid :', this.taskForm.valid);

    if (e.value.option === 'Level3') {
      this.stateValue = e.value.option;
      // this.taskForm.get('states')?.setValidators(Validators.required)
      this.taskForm.get('states')?.addValidators(Validators.required);
      // Above line is called  Conditional Validations.
    } else {
      this.stateValue = '';
    }
  }

  public submitForm() {
    // console.log(this.taskForm);
    // console.log("form valid",this.taskForm.valid);
    // this.taskForm.get('states')?.reset()  // we can clear one specific field in our form.
    this.taskForm.reset();
    this.stateValue = '';
  }
  public creationFrom() {
    this.names$.subscribe(
      (data) => (this.namesArrData = data)
      // console.log(data[0])
    );
    this.namesOf$
      .pipe(
        // take(4)
        distinctUntilChanged() // If the two values same it will give only one, but it consider order means 9 9 8 8 3 5 8 9 OP is 9 8 3 5 8 9
      )
      .subscribe(
        (data) =>
          // console.log(data),
          (this.namesOfData = data)
      );
    this.namesDistinct$.pipe(distinct()).subscribe(
      (data) => (this.distinctNames = data)
      // console.log(data)
    );
    this.sampleSub.subscribe({
      next: (data) => console.log('subject data', data),
      error: (err) => console.log('error is', err),
      complete: () => console.log('completed'),
    });
    this.sampleSub.next('mahesh');
    this.sampleSub.next('mb');
    this.sampleSub.error('Error 1 is executing');
    this.sampleSub.error('Error 2 is executing'); //only one error stmt will execute.
    this.sampleSub.complete();

    this.numArr$
      .pipe
      // All will follow synchronous way step by step
      // map((x) => x * 2), // will iterate with every element
      // filter((num) => num % 3 == 0), // after map filter
      // distinct(),
      // max()
      // min()
      // count()
      // skip(2) // which skips the first values what
      // first() & last()
      // elementAt(3)
      ()
      .subscribe((data) =>
        // this.numArr=data
        console.log(data)
      );
  }
  public Obs() {
    console.log('just before subscribe');
    this.observable.subscribe({
      next(x) {
        // console.log('got value ' + x);
      },
      error(err) {
        // console.error('something wrong occurred: Mahesh ' + err);
      },
      complete() {
        console.log('done');
      }, // it wont execute cos we have an error.
    });
    // console.log('just after subscribe');
  }
  bufferData: any;
  public buffer() {
    from([12, 23, 2, 3, 23, 23, 2])
      .pipe(
        // bufferCount(2,3)
        bufferTime(1000, 2000)
      )
      .subscribe((data) => console.log(data));
  }

  sampleSubject = new Subject();
  public subjects() {
    console.log('subjects clicked ');

    this.sampleSubject.subscribe({
      next: (data) => console.log('subject data', data),
      error: (data) => console.log('error data', data),
      complete() {
        console.log('subject completed');
      },
    });
    this.sampleSubject.next('Mahesh passing data from GO');
    this.sampleSubject.error('sreeja is through error');
    this.sampleSubject.complete();
  }
}
