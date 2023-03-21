import { Component, OnInit } from '@angular/core';

import { Chart, registerables } from 'chart.js/auto';
// Chart.register(...registerables);
import { HttpClient } from '@angular/common/http';
import { myJson, SoilObj } from 'src/Models/myJson-interface';
import { ChartData } from 'chart.js';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  public climateChart: any;
  public chart3: any;
  data: any;
  public soilData: any;
  public soilOptions: any;
  options: any;
  public mb!: myJson[];
  public soilObj!: SoilObj;
  public cropsData!: ChartData;

  constructor(public http: HttpClient,private primengConfig: PrimeNGConfig) {}
  ngOnInit(): void {

let myObj={to:'mahesh', msg:'new Raghu', sub:"sub" }
localStorage.setItem("mahesh",JSON.stringify(myObj))

    this.getJSON();
    this.soil();
    this.doughhart();
    this.climate();
    this.crops();
  }
  public getJSON(): void {
    this.http
      .get('../../../assets/data/ts-agro.json')
      .subscribe((data: any) => {
        console.log(data);
        this.soilObj = data[0].forInfo.soil;
        console.log(this.soilObj);
      });
  }

  public soil(): void {
    this.soilData = {
      labels: ['Red Sandy', 'Red Soil', 'Clay soil', 'Black cotton soil'],
      datasets: [
        {
          label: 'Showing Soil Info',
          data: [12, 34, 64, 6],
          // data: [ this.soilObj.redSandy , this.soilObj.redSoil, this.soilObj.clay, this.soilObj.blackCotton],
        },
      ],
    };

    this.soilOptions = {
      plugins: {
        title: {
          display: true,
          text: 'SOIL info',
          fontSize: 24,
        },
        // legend: {
        //     position: 'top'
        // }
        legend: {
          label: {
            color: 'red',
          },
        },
      },
    };
  }

  public doughhart(): void {
    this.chart3 = new Chart('doughoutchart', {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green'],
        datasets: [
          {
            label: '# of Votes',
            data: [21, 19, 3, 5],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  public climate(): void {
    this.climateChart = {
      scales: {
        xAxes: [
          {
            barPercentage: 0.1,
            categoryPercentage: 0.5,
          },
        ],
      },
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      datasets: [
        {
          label: 'Highest Humidity',
          backgroundColor: 'green',
          borderWidth: 0.5,
          borderColor: 'black',
          data: [22, 24, 28, 30, 34, 32, 30, 25, 23, 24, 22, 20],
        },
        {
          label: 'Lowest Humidity',
          backgroundColor: 'orange',
          data: [12, 18, 20, 22, 26, 22, 21, 18, 17, 15, 17, 12],
        },
      ],
      bars: {
        barThinckness: 0.5,
        maxBarThickness: 1,
      },
    };

    this.options = {
      plugins: {
        title: {
          display: true,
          fontSize: 21,
        },
        legend: {
          position: 'top',
        },
      },
    };
  }

  public crops(): void {
    this.cropsData = {
      labels: ['Rice', 'Maize', 'Cotton', 'Pulses', 'rest'],
      datasets: [
        {
          label: 'Highest Harvesting crops in TS',
          data: [45, 24, 31, 25, 20],
          backgroundColor: 'orange',
        },
      ],

    };
    this.primengConfig.ripple = true;
  }
}
