import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { myJsonData } from 'src/Models/jsonForm';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  taskForm!: FormGroup;
  country: { name: string; code: string }[] = [];
  JSONData: myJsonData[] = [];
  constructor(private http: HttpClient, public fb: FormBuilder) {
    this.getJsonData();
  }
  ngOnInit() {
    this.taskForm = this.fb.group({});
  }
  public getJsonData(): void {
    this.http
      .get<myJsonData[]>('../assets/data/jsonForm.json')
      .subscribe((jsonData: myJsonData[]) => {
        console.log(jsonData);
        this.JSONData = jsonData;
        // Below one is for dropdown
        jsonData.map((data: myJsonData) => {
          if (data.dropdown) {
            this.country = data.dropdown;
          }
        });

        jsonData.map((data: myJsonData) => {
          let validators = [];
          if (data.Validations && data.Validations.required) {
            validators.push(Validators.required);
          }
          if (data.Validations && data.Validations.required) {
            validators.push(Validators.minLength(data.Validations.minLength));
          }
          if (data.type === 'email') {
            validators.push(Validators.email);
          }
          let control = this.fb.control('', validators);
          this.taskForm.addControl(data.controlName, control);
        });
      });
  }

  public onSubmit() {
    console.log(this.taskForm);
    this.taskForm.reset();
  }


}
