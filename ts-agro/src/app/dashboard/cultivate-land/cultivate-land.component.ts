import { Component, ElementRef, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CropProduction } from 'src/Models/myJson-interface';
import * as mapboxgl from 'mapbox-gl';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-cultivate-land',
  templateUrl: './cultivate-land.component.html',
  styleUrls: ['./cultivate-land.component.scss'],
})
export class CultivateLandComponent implements OnInit {
  @ViewChild('mb') mb!:ElementRef
  visiblePopup!: boolean;
  showDiv: boolean = false;
  showHoverData = false;
  zoom = 11;
  latitude: number = 17.385;
  longitude: number = 78.4867;
  cropProd: CropProduction[] = [];

  constructor(public http: HttpClient ,  public _dataService:DataService) {}
  ngOnInit(): void {
    this.getJson();
    // this._dataService.nameMb()
    // navigator.geolocation.getCurrentPosition((loc)=>{
    //   this.latitude=loc.coords.latitude;
    //   this.longitutde = loc.coords.longitude;
    //   console.log(this.latitude, this.longitutde);

    // })
  }
  public getJson(): void {
    this.http.get('../assets/data/ts-agro.json').subscribe((e: any) => {
      this.cropProd = e[1].cropProduction;
      console.log(this.cropProd);
    });
  }
  public forLatLng(data: any) {
    this.latitude = data.lat;
    this.longitude = data.lng;
  }
  public showDistrictDetails() {
    this.showDiv = true;
  }
  public hideDistrictDetails() {
    this.showDiv = false;
  }
}
