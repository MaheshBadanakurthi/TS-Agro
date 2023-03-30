import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CropProduction } from 'src/Models/myJson-interface';
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'app-cultivate-land',
  templateUrl: './cultivate-land.component.html',
  styleUrls: ['./cultivate-land.component.scss'],
})
export class CultivateLandComponent implements OnInit {
  visiblePopup!:boolean
  constructor(public http: HttpClient) {}
  ngOnInit(): void {
    this.getJson();
  }
  cropProd: CropProduction[] = [];
  public getJson(): void {
    this.http.get('../assets/data/ts-agro.json').subscribe((e: any) => {
      this.cropProd = e[1].cropProduction;
      console.log(this.cropProd);
    });
  }

  showHoverData = false;

  onTooltipShow(event:any) {
    this.showHoverData = true;
  }



}
